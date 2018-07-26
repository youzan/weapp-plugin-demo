const webpack = require('webpack');
const baseResolve = require('./webpack.config.base.resolve');
const baseLoaders = require('./webpack.config.base.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: false,
  watchOptions: {
    ignored: /node_modules|dist/,
    poll: 1000
  },
  resolve: baseResolve,
  module: { rules: baseLoaders },
  // optimization: {
  //   // minimize: false,
  //   // 始终开启压缩，以保证在开发模式可以预览
  // },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './functional-pages',
        to: 'functional-pages'
      },
    ]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
    })
  ]
};
