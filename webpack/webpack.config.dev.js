const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    proxy: {
      // NOTE: Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.
      // Check the docs: https://webpack.js.org/configuration/dev-server/#devserverproxy
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  output: {
    publicPath: '/'
  },
  devtool: 'source-map'
});
