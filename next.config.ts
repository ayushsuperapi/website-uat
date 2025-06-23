/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/dashboard',
          destination: 'https://platform.superapi.cloud/app',
        },
        {
          source: '/dashboard/:path*',
          destination: 'https://platform.superapi.cloud/app/:path*',
        },
        {
          source: '/docs',
          destination: 'https://platform.superapi.cloud/docs',
        },
        {
          source: '/docs/:path*',
          destination: 'https://platform.superapi.cloud/docs/:path*',
        },
        {
          source: '/api',
          destination: 'https://platform.superapi.cloud/app',
        },
        {
          source: '/api/:path*',
          destination: 'https://platform.superapi.cloud/app/:path*',
        },
        {
          source: '/playground',
          destination: 'https://playground.trysuperapi.com/',
        },
      ],
    };
  },
};

module.exports = nextConfig;