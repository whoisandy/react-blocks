#!/bin/bash -e

babel=node_modules/.bin/babel
webpack=node_modules/.bin/webpack
build_dir=lib

rm -rf $build_dir

$babel ./src --stage 0 -d $build_dir --ignore "tests"

NODE_ENV=production $webpack src/index.js $build_dir/umd/ReactBlocks.js
NODE_ENV=production $webpack -p src/index.js $build_dir/umd/ReactBlocks.min.js

printf "\nGzip: Minified size `gzip -c $build_dir/umd/ReactBlocks.min.js | wc -c | awk {'print $1/1000'}` bytes\n"
