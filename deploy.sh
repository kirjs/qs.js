#!/bin/sh
#
# This script builds demo and pushes it to gh-pages branch
#

# clean up
cd "$(git rev-parse --show-toplevel)"
set -e
rm -rf dist || exit 0;
mkdir dist

# build
node generate.js
cp ./site/* ./dist/
cd dist

# deploy
git init
git remote add origin https://github.com/kirjs/jsbin-quick-start.git
git add .
git commit -m "Deploy to GitHub Pages"
git checkout -b gh-pages
git push -uf origin gh-pages
