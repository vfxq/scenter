const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const webpackConf = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    './src/client/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, "../../target"),
    filename: 'bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
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
        test: /\.(scss|css)$/,
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
};

module.exports = webpackConf;