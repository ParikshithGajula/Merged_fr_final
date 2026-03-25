const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const dashProxy = createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  ws: true
});

const homeProxy = createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  ws: true
});

app.use((req, res, next) => {
  // Directly route /dashboard to Project 1 (which runs with --base /dashboard/)
  if (req.path.startsWith('/dashboard')) {
    return dashProxy(req, res, next);
  }
  
  // Any asset requests that accidentally drop the prefix but have a referer from the dashboard
  const referer = req.headers.referer || '';
  if (referer.includes('/dashboard')) {
    return dashProxy(req, res, next);
  }

  // Everything else goes to Project 2
  return homeProxy(req, res, next);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 Integration Layer Running!`);
  console.log(`👉 Primary Entry: http://localhost:${PORT}`);
  console.log(`👉 Dashboard Access: http://localhost:${PORT}/dashboard`);
  console.log('====================================================');
});

