// Serverless Function to manage Visitor and PWA Install counts
// Uses Vercel KV (Upstash Redis) REST API when configured, otherwise falls back to a memory-based mock store.

export default async function handler(req, res) {
  // CORS Headers to allow safe cross-origin access if needed (optional since same-origin is default)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  // Local/Dev Fallback when Vercel KV is not configured (or during npm run dev locally)
  if (!kvUrl || !kvToken) {
    if (!global.mockStats) {
      global.mockStats = {
        visitors: 1, // Nice baseline starting count
        installs: 1  // Nice baseline PWA install count
      };
    }

    if (req.method === 'POST') {
      // Parse search params or URL parameters manually since req.url can be relative
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      const action = url.searchParams.get('action');

      if (action === 'visit') {
        global.mockStats.visitors += 1;
      } else if (action === 'install') {
        global.mockStats.installs += 1;
      }
    }

    return res.status(200).json({
      success: true,
      visitors: global.mockStats.visitors,
      installs: global.mockStats.installs,
      isMock: true
    });
  }

  // Production Vercel KV API interaction
  try {
    const headers = {
      'Authorization': `Bearer ${kvToken}`,
      'Content-Type': 'application/json'
    };

    if (req.method === 'POST') {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const action = url.searchParams.get('action');

      if (action === 'visit') {
        await fetch(`${kvUrl}/INCR/wa_visitor_count`, { method: 'POST', headers });
      } else if (action === 'install') {
        await fetch(`${kvUrl}/INCR/wa_install_count`, { method: 'POST', headers });
      }
    }

    // Fetch the current counts in parallel
    const [visRes, insRes] = await Promise.all([
      fetch(`${kvUrl}/GET/wa_visitor_count`, { headers }),
      fetch(`${kvUrl}/GET/wa_install_count`, { headers })
    ]);

    if (!visRes.ok || !insRes.ok) {
      throw new Error(`KV REST API returned error status: ${visRes.status} / ${insRes.status}`);
    }

    const visData = await visRes.json();
    const insData = await insRes.json();

    // Upstash Redis GET returns: { result: "string_value" } or { result: null }
    const visitors = parseInt(visData.result || '0', 10);
    const installs = parseInt(insData.result || '0', 10);

    // If counts are fresh (0), we can seed them with nicer default baselines
    // so it doesn't display "0" visitors for new setups.
    const displayVisitors = visitors === 0 ? 1 : visitors;
    const displayInstalls = installs === 0 ? 1 : installs;

    return res.status(200).json({
      success: true,
      visitors: displayVisitors,
      installs: displayInstalls,
      isMock: false
    });
  } catch (error) {
    console.error('Error in stats serverless function:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch or update stats data'
    });
  }
}
