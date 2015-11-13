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
