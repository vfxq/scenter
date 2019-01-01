const path = require('path');

const webpack = {
  mode: "development",
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, "target"),
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
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
      }
    ]
  }
};

module.exports = webpack;