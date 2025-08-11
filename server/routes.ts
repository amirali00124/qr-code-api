import type { Express } from "express";
import path from "path";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import QRCode from "qrcode";
import sharp from "sharp";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for deployment monitoring
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Serve download page
  app.get("/download", (req, res) => {
    res.sendFile(path.resolve("download.html"));
  });

  // Serve zip file
  app.get("/complete-github-files.zip", (req, res) => {
    res.download(path.resolve("complete-github-files.zip"));
  });

  // Serve deployment package download page
  app.get("/download", (req, res) => {
    const filePath = path.resolve(process.cwd(), "deployment-package", "download.html");
    res.sendFile(filePath);
  });

  // Serve deployment package zip file
  app.get("/download/qr-code-api-deployment.zip", (req, res) => {
    const filePath = path.resolve(process.cwd(), "deployment-package", "qr-code-api-deployment.zip");
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="qr-code-api-deployment.zip"');
    res.sendFile(filePath);
  });

  // QR Code generation endpoint
  app.post("/api/qr/generate", async (req, res) => {
    try {
      const { 
        data, 
        size = 200, 
        format = "png", 
        color = "#000000", 
        background_color = "#ffffff",
        error_correction = "M",
        border = 2 
      } = req.body;

      if (!data) {
        return res.status(400).json({
          success: false,
          error: "Missing required parameter",
          error_code: "INVALID_DATA",
          message: "Data parameter is required"
        });
      }

      if (size < 50 || size > 2000) {
        return res.status(400).json({
          success: false,
          error: "Invalid size parameter",
          error_code: "INVALID_SIZE", 
          message: "Size must be between 50 and 2000 pixels"
        });
      }

      const qrOptions = {
        errorCorrectionLevel: error_correction as any,
        type: 'png' as const,
        quality: 0.92,
        margin: border,
        color: {
          dark: color,
          light: background_color
        },
        width: size
      };

      const qrId = Math.random().toString(36).substring(2, 15);
      const timestamp = new Date().toISOString();
      
      if (format === "svg") {
        const svgString = await QRCode.toString(data, { 
          ...qrOptions, 
          type: 'svg' as const,
          width: size
        });
        
        return res.json({
          success: true,
          qr_code_url: `data:image/svg+xml;base64,${Buffer.from(svgString).toString('base64')}`,
          qr_id: qrId,
          format: format,
          size: `${size}x${size}`,
          data: data,
          color: color,
          background_color: background_color,
          error_correction: error_correction,
          created_at: timestamp,
          expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          analytics_enabled: true
        });
      }

      // Generate PNG/JPG
      const qrBuffer = await QRCode.toBuffer(data, qrOptions);
      
      let finalBuffer = qrBuffer;
      if (format === "jpg") {
        finalBuffer = await sharp(qrBuffer)
          .jpeg({ quality: 90 })
          .toBuffer();
      }

      const base64QR = `data:image/${format};base64,${finalBuffer.toString('base64')}`;

      res.json({
        success: true,
        qr_code_url: base64QR,
        qr_id: qrId,
        format: format,
        size: `${size}x${size}`,
        data: data,
        color: color,
        background_color: background_color,
        error_correction: error_correction,
        created_at: timestamp,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        analytics_enabled: true
      });

    } catch (error) {
      console.error('QR generation error:', error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
        error_code: "GENERATION_FAILED",
        message: "Failed to generate QR code"
      });
    }
  });

  // Batch QR Code generation endpoint
  app.post("/api/qr/batch", async (req, res) => {
    try {
      const { items } = req.body;

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
          success: false,
          error: "Invalid batch request",
          error_code: "INVALID_BATCH",
          message: "Items array is required and must not be empty"
        });
      }

      if (items.length > 100) {
        return res.status(400).json({
          success: false,
          error: "Batch too large",
          error_code: "BATCH_TOO_LARGE",
          message: "Maximum 100 items per batch request"
        });
      }

      const batchId = Math.random().toString(36).substring(2, 15);
      const results = [];
      let successful = 0;
      let failed = 0;

      for (let i = 0; i < items.length; i++) {
        try {
          const item = items[i];
          const { 
            data, 
            size = 200, 
            format = "png", 
            color = "#000000",
            error_correction = "M",
            custom_id 
          } = item;

          if (!data) {
            results.push({
              success: false,
              custom_id: custom_id,
              error: "Missing data parameter"
            });
            failed++;
            continue;
          }

          const qrOptions = {
            errorCorrectionLevel: error_correction as any,
            type: 'png' as const,
            quality: 0.92,
            margin: 2,
            color: { dark: color, light: "#ffffff" },
            width: size
          };

          const qrId = Math.random().toString(36).substring(2, 15);
          
          if (format === "svg") {
            const svgString = await QRCode.toString(data, { 
              ...qrOptions, 
              type: 'svg' as const 
            });
            
            results.push({
              success: true,
              qr_id: qrId,
              qr_code_url: `data:image/svg+xml;base64,${Buffer.from(svgString).toString('base64')}`,
              custom_id: custom_id
            });
          } else {
            const qrBuffer = await QRCode.toBuffer(data, qrOptions);
            const base64QR = `data:image/${format};base64,${qrBuffer.toString('base64')}`;
            
            results.push({
              success: true,
              qr_id: qrId,
              qr_code_url: base64QR,
              custom_id: custom_id
            });
          }
          
          successful++;
        } catch (error) {
          results.push({
            success: false,
            custom_id: items[i].custom_id,
            error: "Generation failed"
          });
          failed++;
        }
      }

      res.json({
        success: true,
        batch_id: batchId,
        total_items: items.length,
        successful: successful,
        failed: failed,
        results: results,
        created_at: new Date().toISOString()
      });

    } catch (error) {
      console.error('Batch generation error:', error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
        error_code: "BATCH_GENERATION_FAILED",
        message: "Failed to process batch request"
      });
    }
  });

  // QR Code info endpoint (mock data for now)
  app.get("/api/qr/info/:qr_id", (req, res) => {
    const { qr_id } = req.params;
    
    // Mock response - in production, you'd fetch from database
    res.json({
      success: true,
      qr_id: qr_id,
      qr_code_url: `https://cdn.qrcode.com/qr/${qr_id}.png`,
      data: "https://example.com",
      format: "png",
      size: "300x300",
      color: "#000000",
      created_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      scan_count: Math.floor(Math.random() * 100),
      last_scanned: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  });

  // Analytics endpoint (mock data)
  app.get("/api/analytics", (req, res) => {
    const { period = "month" } = req.query;
    
    // Mock analytics data
    res.json({
      success: true,
      period: period,
      total_qr_codes: 1542,
      total_scans: 8376,
      unique_scanners: 3421,
      top_qr_codes: [
        {
          qr_id: "abc123",
          data: "https://example.com/product1",
          scan_count: 245,
          created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          qr_id: "def456", 
          data: "https://example.com/product2",
          scan_count: 198,
          created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        }
      ],
      daily_stats: Array.from({length: 30}, (_, i) => ({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        qr_generated: Math.floor(Math.random() * 50) + 10,
        scans: Math.floor(Math.random() * 200) + 50
      })),
      geographic_data: [
        { country: "United States", scan_count: 3421, percentage: 40.8 },
        { country: "United Kingdom", scan_count: 1675, percentage: 20.0 },
        { country: "Germany", scan_count: 1257, percentage: 15.0 },
        { country: "France", scan_count: 838, percentage: 10.0 },
        { country: "Others", scan_count: 1185, percentage: 14.2 }
      ]
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
