// Vercel Serverless Function: Proxy phát âm tiếng Việt qua Google TTS
// Giải quyết triệt để lỗi 403 / 404 do Google chặn Referer từ tên miền ngoài

export default async function handler(req, res) {
  // Hỗ trợ CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { q, tl = 'vi', ie = 'UTF-8', client = 'tw-ob' } = req.query;

  if (!q || !q.trim()) {
    return res.status(400).json({ error: 'Missing parameter q' });
  }

  const cleanText = q.trim();
  const encoded = encodeURIComponent(cleanText);
  const targetUrl = `https://translate.google.com/translate_tts?ie=${encodeURIComponent(ie)}&tl=${encodeURIComponent(tl)}&client=${encodeURIComponent(client)}&q=${encoded}`;

  try {
    const upstreamResponse = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://translate.google.com/'
      }
    });

    if (!upstreamResponse.ok) {
      return res.status(upstreamResponse.status).send(`Upstream TTS failed with status ${upstreamResponse.status}`);
    }

    const arrayBuffer = await upstreamResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    // Lưu cache trên Vercel Edge CDN 1 năm để giảm thiểu request và tăng tốc tối đa
    res.setHeader('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    return res.status(200).send(buffer);
  } catch (error) {
    console.error('TTS Proxy Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
