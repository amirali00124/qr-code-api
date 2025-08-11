import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { items } = (req.body as any) ?? {};
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items[] is required' });
  }

  // Stub success response. You can fan-out to generate each item if needed.
  return res.status(200).json({ count: items.length, status: 'accepted' });
}
