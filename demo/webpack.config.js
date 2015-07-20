'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: path.resolve(__dirname, 'index.js'),

  output: {
    path: path.resolve(__dirname, '../website'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'react-blocks/lib': process.cwd() + '/src',
      'react-blocks$': process.cwd() + '/src'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("../website/bundle.css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
