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
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../tsconfig.json"),
        logLevel: "info",
        extensions: [".ts", ".tsx"]
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        use: [
            {
                loader: 'tslint-loader',
                options: { /* Loader options go here */ }
            }
        ]
      },
      {
        test: /.(tsx|ts)$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFile: path.resolve(__dirname, "../../tsconfig.json")
        },
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
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options:{
          name:'image/[path][name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(otf|ttf)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = webpackConf;