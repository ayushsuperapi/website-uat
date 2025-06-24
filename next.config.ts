/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/dashboard',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/app',
        },
        {
          source: '/dashboard/:path*',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/app/:path*',
        },
        {
          source: '/docs',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/docs',
        },
        {
          source: '/docs/:path*',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/docs/:path*',
        },
        {
          source: '/app',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/app',
        },
        {
          source: '/app/:path*',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/app/:path*',
        },
        {
          source: '/playground',
          destination: 'https://4e28-103-163-65-90.ngrok-free.app/playground',
        },
      ],
    };
  },
  async headers() {
    return [
      {
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
          // Don't cache streaming responses
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