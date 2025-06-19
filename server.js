// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const PLATFORM_URL = 'https://platform.superapi.cloud';
// const PLATFORM_BASE_PATH = '/app';

// const errorLogger = (err, req, res, next) => {
//   console.error('Error:', err.message);
//   next(err);
// };

// app.prepare().then(() => {
//   const server = express();

//   server.get('/dashboard', (req, res) => {
//     res.redirect('/dashboard/applications');
//   });

//   const proxyOptions = {
//     target: PLATFORM_URL,
//     changeOrigin: true,
//     secure: true,
//     pathRewrite: (path) => {
//       if (path.startsWith('/dashboard')) {
//         return path.replace('/dashboard', PLATFORM_BASE_PATH);
//       }
//       return path;
//     },
//     onProxyReq: (proxyReq, req) => {
//       if (req.headers.cookie) {
//         proxyReq.setHeader('Cookie', req.headers.cookie);
//       }
//       proxyReq.setHeader('Origin', PLATFORM_URL);
//       proxyReq.setHeader('Referer', PLATFORM_URL);
//       proxyReq.setHeader('Host', new URL(PLATFORM_URL).host);
//       proxyReq.setHeader('X-Accel-Buffering', 'no');
//       if (req.headers.authorization) {
//         proxyReq.setHeader('Authorization', req.headers.authorization);
//       }
//     },
//     onProxyRes: (proxyRes, req, res) => {
//       const cookies = proxyRes.headers['set-cookie'];
//       if (cookies) {
//         res.setHeader('Set-Cookie', cookies);
//       }
//       const headersToForward = [
//         'x-accel-buffering',
//         'content-type',
//         'content-length',
//         'cache-control',
//         'etag',
//         'last-modified',
//         'authorization',
//         'set-cookie'
//       ];
//       headersToForward.forEach(header => {
//         if (proxyRes.headers[header]) {
//           res.setHeader(header, proxyRes.headers[header]);
//         }
//       });
//     },
//     onError: (err, req, res) => {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Proxy error: ' + err.message);
//     }
//   };

//   server.use(['/dashboard', '/app', '/api'], createProxyMiddleware(proxyOptions));

//   server.use(errorLogger);

//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.use((err, req, res, next) => {
//     res.status(500).send('Internal Server Error');
//   });

//   const port = process.env.PORT || 3000;
//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// }); 