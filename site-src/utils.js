var fs = require('fs');
var path = require('path');

/**
 * Creates the folder structure all the way to the input path.
 * @param {string} filepath
 */
function mkdirp(filepath){
  var dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    mkdirp(dir);
    fs.mkdirSync(dir)
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
  if (replacers) {
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


function getContent(url){
  // return new pending promise
  return new Promise((resolve, reject) =>{
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) =>{
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(JSON.parse(body.join(''))));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
  })
}

function extractLib(html){
  var cloudFlareRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/.+?\/.+?\//g;
  var libRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/(.+?)\/(.+?)\//;
  return (html.match(cloudFlareRegex) || []).reduce((libs, lib)=>{
    const [full, name, version] = lib.match(libRegex);
    libs.push({name, version});
    return libs;
  }, []);
}


module.exports = {
  extractLib,
  copyTo,
  writeTo,
  getContent
};
