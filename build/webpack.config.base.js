const webpack = require('webpack');
const MiniPlugin = require('mini-program-webpack-loader').plugin;
const baseResolve = require('./webpack.config.base.resolve');
const baseLoaders = require('./webpack.config.base.loaders');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: false,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },
  resolve: baseResolve,
  module: { rules: baseLoaders },
  optimization: {
    minimize: true,
    // 始终开启压缩，以保证在开发模式可以预览
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
    }),
    new MiniPlugin({
      extfile: false,
      analyze: true
    })
  ]
};
