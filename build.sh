#!/bin/sh
#
# This script builds the site
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


