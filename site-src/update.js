var getData = require('./getData');
var data = getData.read();
var utils = require('./utils');
var cloudFlareRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/.+?\/.+?\//g;

var extractLib = require('./utils').extractLib;

/**
 * Step 1: extract all libs and versions from html
 * @type {{
 *    name: string,
 *   version: string
 *   }}
 */
var libs = data.reduce((libs, group)=>{
  return group.items.reduce((libs, item)=>{
    return libs.concat(extractLib(item.data.html));
  }, libs)
}, []);


/**
 * Step 2:
 * - Remove duplicates.
 * - Remove angular, as the versions are messed up.
 */
var map = {};
libs = libs.filter(lib=>lib.name !== 'angular.js' && !map[lib.name] && (map[lib.name] = true));


/**
 * Step3. Fetch the latest versions.
 */

Promise.all(libs.map((lib)=>{
  return utils.getContent(`https://api.cdnjs.com/libraries?search=${lib.name}&fields=version`);
})).then((result)=>{

  var latestVersions = libs.reduce((map, {name}, i)=>{
    map[name] = result[i].results.filter(n=> n.name === name)[0].version;
    return map;
  }, {});

  console.log(latestVersions);
  updateTheLibs(libs, latestVersions);

}, ()=>{
  console.log(arguments)
}).catch((a)=>{
  console.log(a)
});


/**
 * Eventually update the libs in html.
 * @param libs
 * @param latestVersions
 */

function updateTheLibs(libs, latestVersions){
  var libRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/(.+?)\/(.+?)\//g;
  data.reduce((libs, group)=>{
    return group.items.reduce((libs, item)=>{
      if (item.data.html.match(cloudFlareRegex)) {

        item.data.html = item.data.html.replace(libRegex, function (full, name, version){
          return `//cdnjs.cloudflare.com/ajax/libs/${name}/${latestVersions[name] || version}/`;
        });

        getData.update(item);
      }
    }, libs)
  }, []);
}


