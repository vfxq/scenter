const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const path = require('path');

const webpack = {
  mode: "development",
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, "target"),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }, {
        test: /.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(({
          fallback: 'style-loader', 
          use: ['css-loader', 'sass-loader']
        }))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = webpack;