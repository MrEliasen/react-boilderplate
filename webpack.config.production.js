/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:44:28
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 15:01:09
*/
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'assets/bundle.js',
    // the output bundle
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: true,
                importLoaders: true,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer'),
                  ];
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                includePaths: [
                  'node_modules',
                  'bower_components',
                  'src/Assets',
                ],
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new ExtractTextPlugin({
      filename: 'assets/[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: 'index.html',
      },
      {
        from: 'static/assets',
        to: 'assets',
      },
    ],
    {
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: false,
    }),
  ],
};
