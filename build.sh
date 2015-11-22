#!/bin/sh
#
# This script builds demo and push it to gh-pages branch
#

# clean up
cd "$(git rev-parse --show-toplevel)"
set -e
rm -rf dist || exit 0;
mkdir dist

# build
cp ./site/* ./dist/
babel-node site-src/main.js
cd dist


