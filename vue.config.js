// const path = require('path')

module.exports = {
  // outputDir: path.resolve(__dirname, '../server/public'),
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'i18n/locales',
      enableInSFC: false
    }
  }
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg')
    
  //   svgRule.uses.clear()
    
  //   svgRule
  //     .use('babel-loader')
  //     .loader('babel-loader')
  //     .end()
  //     .use('svg-url-loader')
  //     .loader('svg-url-loader')
  //     .end()
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader')
  // }
}