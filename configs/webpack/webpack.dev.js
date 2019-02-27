const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract(({
          fallback: 'style-loader', 
          use: ['css-loader', 'sass-loader']
        }))
      }
    ]
  }
});