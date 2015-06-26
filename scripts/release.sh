#!/bin/bash -e

webpack=node_modules/.bin/webpack
website=website

mkdir -p $website
cp demo/index.html $website/index.html

NODE_ENV=production $webpack -p --config demo/webpack.config.js
ga -A $website
gc -m 'built website'
git subtree push --prefix $website origin gh-pages
