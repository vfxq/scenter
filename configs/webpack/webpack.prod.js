const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'false',
  performance: { 
    hints: false 
  },
  stats: {
    children: false
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true  
    }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  }
});