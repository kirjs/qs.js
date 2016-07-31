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

if [ "$1" == "--update" ]; then
  babel-node site-src/update.js
fi

babel-node site-src/main.js



