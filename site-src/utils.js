var fs = require('fs');
var path = require('path');

/**
 * Creates the folder structure all the way to the input path.
 * @param {string} filepath
 */
function mkdirp(filepath){
  var dir = path.dirname(filepath);
  if(!fs.existsSync(dir)){
    mkdirp(dir);
    fs.mkdirSync( dir)
  }
}

/**
 * Takes a template, replace the placeholders, and writes it to the file.
 * @param {string} template
 * @param {string} to Future file path
 * @param {object} replacers object where keys are placeholder names, and values
 *     are values.
 */
function writeTo(template, to, replacers){
  if( replacers ) {
    template = Object.keys(replacers).reduce((template, key) =>{
      var regex = new RegExp('<%\\s?' + key + '\\s?%>', 'g');
      return template.replace(regex, replacers[key]);
    }, template);
  }
  mkdirp(to);
  fs.writeFileSync(to, template);
}

/**
 * Takes a file, replace the placeholders, and writes it to the file.
 * @param {string} from Path to existing file
 * @param {string} to Future file path
 * @param {object} replacers Object where keys are placeholder names, and values
 *     are values.
 */
function copyTo(from, to, replacers){
  var template = fs.readFileSync(from, 'UTF-8');
  writeTo(template, to, replacers);
}

module.exports = {
  copyTo: copyTo,
  writeTo: writeTo
};
