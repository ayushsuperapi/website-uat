/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: 'https://platform.superapi.cloud/app',
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*',
      },
      {
        source: '/app/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;