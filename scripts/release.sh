#!/bin/bash -e

webpack=node_modules/.bin/webpack
website=website

mkdir -p $website
cp demo/index.html $website/index.html

NODE_ENV=production $webpack -p --config demo/webpack.config.js
git add -A $website
git commit -m 'built website'
git subtree push --prefix $website origin gh-pages
