// webpack.config.js
module.exports = {
    output: {
        module:true
    },
    externals: {
      '@uxland/primary-shell': '@uxland/primary-shell',
  },
  externalsType: 'module', // Ensure Webpack treats externals as ESM
  experiments: {
    outputModule: true,
  },
  optimization: {
    minimize: false,
    concatenateModules: false // Disable module concatenation
  }
}
  