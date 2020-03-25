module.exports = {
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost",
    port: '8081',
    https: false,   //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/api': {
        target: 'http://localhost:8090/', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'config': '@/config'
      }
    }
  }
}
