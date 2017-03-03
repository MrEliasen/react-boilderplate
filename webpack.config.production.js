/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:44:28
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-03-03 16:47:44
*/
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  //devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      {
        from: 'index.html'
      },
      {
        from: 'static/assets',
        to: 'assets'
      }
    ],{
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: false
    })
  ]
};