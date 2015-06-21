'use strict';

import path from 'path';
import gulp from 'gulp';
import open from 'gulp-open';
import gutil from 'gulp-util';
import shell from 'gulp-shell';
import rename from 'gulp-rename';
import {server as karma} from 'karma';

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackDevConfig from './webpack/webpack.dev.config';
import webpackConfig from './webpack/webpack.config';

// Copy task
gulp.task('copy', () => {
  gulp.src('src/dev.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dev'));
});

// Test task
gulp.task('test', (cb) => {
  karma.start({
    configFile: path.resolve(__dirname, 'karma.conf.js'),
    singleRun: true
  }, cb);
});

// Build task
gulp.task('build', (cb) => {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log('Finished \'' + gutil.colors.cyan('webpack:build') + '\'' + ' after ' + gutil.colors.magenta(stats.toJson({timings: true}).time + ' ms'));
    cb();
  });
});

// Dev task
gulp.task('server', ['copy'], (cb) => {
  let bundleStart = null;
  let compiler = webpack(webpackDevConfig);

  compiler.plugin('compile', () => {
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    gutil.log('Finished \'' + gutil.colors.cyan('webpack:dev') + '\'' + ' after ' + gutil.colors.magenta((Date.now() - bundleStart) + 'ms'));
  });

  let server = new webpackDevServer(compiler, {
    contentBase: 'dev',
    publicPath: '/dev/',
    hot: true,
    noInfo: true
  });

  server.listen(8080, 'localhost', (err) => {
    if(err){
      throw new gutil.PluginError('[wepack-dev-server]', err);
    }
    gulp.src('./dev/index.html').pipe(open('', {url: 'http://localhost:8080'}));
    cb();
  });
});

gulp.task('default', ['server'], () => {
  gulp.watch('src/dev.html', ['copy']);
});
