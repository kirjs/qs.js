"use strict";
var runner = require('./runner');
var path = require('path');

var allTestFiles = require('glob').sync(path.join('src', '*', '*.spec.js'));

module.exports = allTestFiles.reduce((result, testPath)=>{
  var framework = testPath.split(path.sep)[1];
  var tests = runner(require(path.join('..','../', testPath)), framework);

  for (let test in tests) {
    if (tests.hasOwnProperty(test)) {
      result[framework + '-' + test] = tests[test];
    }
  }

  return result;
}, {});





