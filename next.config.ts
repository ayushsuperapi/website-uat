/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove external rewrites - now handled by vercel.json
  async headers() {
    return [
      {
        // Apply streaming headers only to internal routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
          {
            key: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            key: 'Connection',
            value: 'keep-alive',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;