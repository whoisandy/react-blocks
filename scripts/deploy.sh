#!/bin/bash -e

website=website

git add -A $website
git commit -m 'deploying website'
git subtree push --prefix $website origin gh-pages
rm -rf $website

echo "Deployed website: http://whoisandie.github.io/react-blocks"
