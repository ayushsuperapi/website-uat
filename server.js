const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Reverse proxy for /dashboard/*
  server.use(
    '/dashboard',
    createProxyMiddleware({
      target: 'https://platform.superapi.cloud/app',
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/dashboard': '',
      },
      onProxyReq: (proxyReq, req, res) => {
        // Forward all cookies
        if (req.headers.cookie) {
          proxyReq.setHeader('Cookie', req.headers.cookie);
        }
        // Forward origin and referer
        proxyReq.setHeader('Origin', 'https://platform.superapi.cloud');
        proxyReq.setHeader('Referer', 'https://platform.superapi.cloud/');
      },
      onProxyRes: (proxyRes, req, res) => {
        // Forward cookies from the platform
        const cookies = proxyRes.headers['set-cookie'];
        if (cookies) {
          res.setHeader('Set-Cookie', cookies);
        }
      }
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}); 