import type { VercelRequest, VercelResponse } from '@vercel/node';
import QRCode from 'qrcode';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const {
    data,
    size = 300,
    format = 'png',
    color = '#000000',
    background_color = '#ffffff',
    error_correction = 'M',
    border = 2,
  } = (req.body as any) ?? {};

  if (!data) return res.status(400).json({ error: 'data is required' });

  const opts = {
    errorCorrectionLevel: (error_correction as 'L' | 'M' | 'Q' | 'H') || 'M',
    color: { dark: color, light: background_color },
    margin: border,
    width: size,
  } as const;

  try {
    if (format === 'svg') {
      const svg = await QRCode.toString(data, { ...opts, type: 'svg' });
      res.setHeader('Content-Type', 'image/svg+xml');
      return res.status(200).send(svg);
    }
    const png = await QRCode.toBuffer(data, { ...opts, type: 'png' });
    res.setHeader('Content-Type', 'image/png');
    return res.status(200).send(png);
  } catch (err) {
    console.error('QR generation error:', err);
    return res.status(500).json({ error: 'QR generation failed' });
  }
}
