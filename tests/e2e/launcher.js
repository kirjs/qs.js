"use strict";
var runner = require('../runner');
var path = require('path');

var allTestFiles = require('glob').sync(path.join('src', '*', 'd3.spec.js'));

module.exports = allTestFiles.reduce((result, testPath)=>{
  var framework = testPath.split(path.sep)[1];
  var tests = runner(require('../../' + testPath), framework);

  for (let test in tests) {
    if (tests.hasOwnProperty(test)) {
      result[framework + '-' + test] = tests[test];
    }
  }

  return result;
}, {});





