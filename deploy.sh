#!/bin/sh
#
# This script builds demo and pushes it to gh-pages branch
#

# build
sh build.sh


# deploy
git init
git remote add origin https://github.com/kirjs/jsbin-quick-start.git
git add .
git commit -m "Deploy to GitHub Pages"
git checkout -b gh-pages
git push -uf origin gh-pages
