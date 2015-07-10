'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/index.js',

  output: {
    library: 'ReactBlocks',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', './src']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0',
      }
    ]
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;
