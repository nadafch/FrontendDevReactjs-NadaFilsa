const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/search?location=Houston",
  createProxyMiddleware({
    target: "https://api.yelp.com/v3/businesses",
    changeOrigin: true,
  })
);
app.use(
  "",
  createProxyMiddleware({
    target: "https://api.yelp.com/v3/businesses",
    changeOrigin: true,
  })
);
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
