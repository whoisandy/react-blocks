'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/dev.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'dev.js',
    publicPath: '/dev/'
  },

  stats: {
    colors: true
  },

  resolve: {
    extensions: ['', '.css', '.js'],
    alias: {
      'react$': process.cwd() + '/node_modules/react/dist/react.min.js',
      'react-blocks$': process.cwd() + '/src'
    },
    modulesDirectories: ['node_modules', 'src']
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
