module.exports = {
  productionSourceMap: false,
  // configureWebpack: {
  // plugins: [new BundleAnalyzerPlugin()]
  // },
  pwa: {
    name: "Crime Network Analyzer",
    appleMobileWebAppCapable: "yes",
    workboxOptions: {
      skipWaiting: true
    }
  }
};
