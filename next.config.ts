/* eslint-disable */
const path = require('path')

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
          source: '/app',
          destination: 'https://platform.superapi.cloud/app',
        },
        {
          source: '/app/:path*',
          destination: 'https://platform.superapi.cloud/app/:path*',
        },
        {
          source: '/playground',
          destination: 'https://playground.trysuperapi.com/',
        },
      ],
    };
  },
  async headers() {
    return [
        {
            source: '/:path*{/}?',
            headers: [
                {
                    key: 'X-Accel-Buffering',
                    value: 'no',
                },
            ],
        },
    ];
  },
};

module.exports = nextConfig;