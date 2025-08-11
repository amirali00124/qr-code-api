import { VercelRequest, VercelResponse } from '@vercel/node';
import QRCode from 'qrcode';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
      error_code: "METHOD_NOT_ALLOWED",
      message: "Only POST method is allowed"
    });
  }

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
    const results: any[] = [];
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
      } catch (itemError) {
        console.error(`Error processing item ${i}:`, itemError);
        results.push({
          success: false,
          custom_id: items[i]?.custom_id,
          error: "Failed to generate QR code"
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
    console.error('Batch QR generation error:', error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      error_code: "BATCH_GENERATION_FAILED",
      message: "Failed to process batch request"
    });
  }
}