/*
* @Author: mark
* @Date:   2017-03-01 15:30:19
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-03-03 13:06:23
*/
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/index.js'
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle
    path: path.resolve(__dirname, 'static/assets'),
    publicPath: '/assets/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    //new webpack.NoEmitOnErrorsPlugin()
    // do not emit compiled assets that include errors
    new ExtractTextPlugin('style.css')
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    inline: true,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    // enable HMR on the server
  }
};