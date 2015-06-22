'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
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
        loader: 'babel',
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
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
