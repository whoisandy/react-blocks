'use strict';

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['chai', 'mocha'],

    reporters: ['mocha'],

    files: [
      './src/tests/index.js'
    ],

    preprocessors: {
      'src/tests/index.js': ['webpack']
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
