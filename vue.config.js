const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  publicPath: './',//publicPath取代了baseUrl
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
           config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
  },
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
  }
}