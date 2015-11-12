var fs = require('fs');
var path = require('path');

var src = 'src';

var libs = fs.readdirSync(src).reduce(function (result, lib) {
  function getContents(extension) {
    var filePath = path.join(src, lib, lib + '.' + extension);
    return fs.existsSync(filePath) && fs.readFileSync(filePath, 'UTF-8');
  }

  var info = JSON.parse(fs.readFileSync(path.join(src, lib, 'package.json')));

  result[lib] = {
    description: info.description,
    config: info.jsQuickstart,
    data: {
      js: getContents('js'),
      html: getContents('html'),
      css: getContents('css')
    }
  };
  return result;
}, {});

fs.writeFileSync('site/src.js', 'var src = ' + JSON.stringify(libs));
