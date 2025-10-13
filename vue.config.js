const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 添加页面标题配置
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'DewShop - 您的在线购物平台'
    }
  }
})
