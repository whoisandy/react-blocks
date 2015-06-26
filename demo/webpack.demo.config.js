'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: path.resolve(__dirname, 'demo.js'),

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'react$': process.cwd() + '/node_modules/react/dist/react.min.js',
      'react-blocks/lib': process.cwd() + '/src',
      'react-blocks$': process.cwd() + '/src'
    }
  },

  module: {
    noParse: [process.cwd() + '/node_modules/react/dist/react.min.js'],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};

module.exports = config;
