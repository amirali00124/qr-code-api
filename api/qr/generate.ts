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

    // Generate PNG buffer
    const qrBuffer = await QRCode.toBuffer(data, qrOptions);
    const base64QR = `data:image/${format};base64,${qrBuffer.toString('base64')}`;

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
}