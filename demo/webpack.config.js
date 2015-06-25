'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, 'demo.react.js'),

  output: {
    path: path.resolve(__dirname, 'demo/__build__'),
    filename: 'demo.js',
    publicPath: '/__build__/'
  },

  resolve: {
    extensions: ['', '.css', '.js'],
    alias: {
      'react$': process.cwd() + '/node_modules/react/dist/react.min.js',
      'react-blocks/lib': process.cwd() + '/src',
      'react-blocks$': process.cwd() + '/src'
    },
    modulesDirectories: ['node_modules', './src']
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
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
