'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  // entry: path.resolve(__dirname, 'demo.js'),
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'index.js')
    ]
  },

  output: {
    path: path.resolve(__dirname),
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
        loader: 'react-hot!babel?stage=0'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};

module.exports = config;
