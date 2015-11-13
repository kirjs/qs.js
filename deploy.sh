#!/bin/sh
#
# This script builds demo and pushes it to gh-pages branch
#

cd "$(git rev-parse --show-toplevel)"
set -e

# build
sh build.sh
cd dist

# deploy
git init
git remote add origin https://github.com/kirjs/jsbin-quick-start.git
git add .
git commit -m "Deploy to GitHub Pages"
git checkout -b gh-pages
git push -uf origin gh-pages
