'use strict';

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['chai', 'mocha'],

    reporters: ['mocha'],

    files: [
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': ['webpack']
    },

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
    ],

    webpack: {
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel',
            test: /\.js?$/
          }
        ],
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
