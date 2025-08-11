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
}