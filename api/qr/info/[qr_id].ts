import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
      error_code: "METHOD_NOT_ALLOWED",
      message: "Only GET method is allowed"
    });
  }

  const { qr_id } = req.query;
  
  if (!qr_id || typeof qr_id !== 'string') {
    return res.status(400).json({
      success: false,
      error: "Invalid QR ID",
      error_code: "INVALID_QR_ID",
      message: "QR ID parameter is required"
    });
  }
  
  // Mock response - in production, you'd fetch from database
  res.json({
    success: true,
    qr_id: qr_id,
    qr_code_url: `https://cdn.qrcode.com/qr/${qr_id}.png`,
    data: "https://example.com",
    format: "png",
    size: "300x300",
    color: "#000000",
    background_color: "#ffffff",
    error_correction: "M",
    created_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    scan_count: Math.floor(Math.random() * 100),
    last_scanned: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    analytics_enabled: true
  });
}