#!/bin/bash -e

webpack=node_modules/.bin/webpack
tmp_dir=tmp

mkdir -p $tmp_dir
cp demo/index.html $tmp_dir/index.html

NODE_ENV=production $webpack -p --config demo/webpack.config.js
git subtree push --prefix $tmp_dir origin gh-pages
