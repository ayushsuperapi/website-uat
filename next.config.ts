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
        source: '/app/:path*.rsc',
        destination: 'https://platform.superapi.cloud/app/:path*.rsc',
      },
      {
        source: '/app/:path*',
        destination: 'https://platform.superapi.cloud/app/:path*',
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/app/:path*.rsc',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/x-component',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;