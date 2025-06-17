/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*'
      },
      {
        source: '/api/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*'
      }
    ];
  }
};

module.exports = nextConfig;