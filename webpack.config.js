const webpack = require('webpack');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const path = require('path');

const webpackConf = {
  mode: "development",
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    './src/client/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, "target"),
    filename: 'bundle.js',
    publicPath: "/",
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
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
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase:  path.join(__dirname, 'target')
  },
};

module.exports = webpackConf;