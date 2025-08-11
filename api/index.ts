import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Health check endpoint
  if (req.url === '/api/health' || req.url === '/health') {
    return res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development"
    });
  }

  // For all other routes, return a placeholder response
  // In production, you would implement your QR code generation logic here
  res.status(200).json({
    message: "QR Code API is running",
    endpoints: {
      health: "/api/health",
      generate: "/api/qr/generate (coming soon)",
      batch: "/api/qr/batch (coming soon)"
    }
  });
}