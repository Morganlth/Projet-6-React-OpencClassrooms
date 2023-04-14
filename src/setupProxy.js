const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app)
{
    app.use('/api', createProxyMiddleware(
    {
      target: 'https://s3-eu-west-1.amazonaws.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '/course.oc-static.com/projects/Front-End+V2/P9+React+1' }
    }))
}