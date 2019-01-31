const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/app.json'),
  output: {
    path: path.resolve(__dirname, '../dist')
  }
});
