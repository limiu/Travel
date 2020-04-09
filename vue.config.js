const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  lintOnSave: false,
  chainWebpack (config) {
    config.resolve.alias
      .set('common', resolve('src/views/common'))
  }
}
