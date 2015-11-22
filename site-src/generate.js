var fs = require('fs');
var path = require('path');

var src = 'src';

var libs = fs.readdirSync(src).reduce(function (result, lib) {
  console.log('Processing: ' + lib);

  function getContents(extension) {
    var filePath = path.join(src, lib, lib + '.' + extension);
    return fs.existsSync(filePath) && fs.readFileSync(filePath, 'UTF-8') || '';
  }

  var info = JSON.parse(fs.readFileSync(path.join(src, lib, 'package.json')));

  result[lib] = {
    description: info.description,
    config: info.jsQuickstart || {},
    author: info.author,
    data: {
      js: getContents('js'),
      html: getContents('html'),
      css: getContents('css')
    }
  };
  return result;
}, {});

/**
 * Takes a list of items and group them by item.config.group.
 *
 * @param items
 * @returns {Object} with group name as a key, and list of items as a value.
 */
function groupItems(items){
  return items.reduce(function (result, item){
    var group = item.config.group || 'Other';
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
}

/**
 * Converts object to an array.
 *
 * @param items Object with key as a key and item as a value.
 * @returns {Array} Items with key property containing the key
 */
function toArray(items){
  return Object.keys(items).map(function (key){
    var item = items[key];
    item.key = key;
    return item;
  })
}

var playgrounds = groupItems(toArray(libs));

libs =  Object.keys(playgrounds).map(function (key){
  return {
    key: key,
    items: playgrounds[key]
  };
});

module.exports = libs;
