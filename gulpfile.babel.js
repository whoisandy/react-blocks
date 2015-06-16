'use strict';

import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import shell from 'gulp-shell';
import rename from 'gulp-rename';
import {exec} from 'child_process';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack/webpack.config';

gulp.task('copy', () => {
  gulp.src('src/dev.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dev'));
});

gulp.task('webpack:dev', ['copy'], (cb) => {
  let bundleStart = null;
  let compiler = webpack(webpackConfig);

  compiler.plugin('compile', () => {
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    gutil.log('Finished \'webpack:build\'' + ' after ' + (Date.now() - bundleStart) + 'ms');
  });

  let server = new WebpackDevServer(compiler, {
    contentBase: 'dev',
    publicPath: '/dev/',
    hot: true,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  server.listen(8080, 'localhost', (err) => {
    if(err){
      throw new gutil.PluginError('[wepack-dev-server]', err);
    }
    exec('open http://localhost:8080', cb);
  });
});

gulp.task('default', ['webpack:dev'], () => {
  gulp.watch('src/dev.html', ['copy']);
});