var getData = require('./getData');
var data = getData.read();
var utils = require('./utils');
var cloudFlareRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/.+?\/.+?\//g;
var libRegex = /\/\/cdnjs.cloudflare.com\/ajax\/libs\/(.+?)\/(.+?)\//g;

module.exports = {
  extractLib: function extractLib(html){
    return (item.data.html.match(cloudFlareRegex) || []).reduce((libs, lib)=>{
      const [full, name, version] = lib.match(libRegex);
      console.log(lib, lib, name, version, '*', lib.match(libRegex));
      libs.push({name, version});
      return libs;
    }, libs);
  }
};

var libs = data.reduce((libs, group)=>{
  return group.items.reduce((libs, item)=>{

  }, libs)
}, []);

function updateTheLibs(libs, latestVersions){
  data.reduce((libs, group)=>{
    return group.items.reduce((libs, item)=>{
      if (item.data.html.match(cloudFlareRegex)) {
        item.data.html = item.data.html.replace(libRegex, function (full, name, version){
          return `//cdnjs.cloudflare.com/ajax/libs/${name}/${latestVersions[name]||version}/`;
        });

        getData.update(item);
      }
    }, libs)
  }, []);
}

var latest = {
  'angular.js': '2.0.0-beta.17',
  rxjs: '4.1.0',
  normalize: '4.2.0',
  redux: '3.5.2',
  riot: '2.5.0',
  vue: '1.0.26',
  c3: '0.4.11',
  'processing.js': '1.6.0',
  highcharts: '4.2.5',
  'tabletop.js': '1.4.3',
  mocha: '3.0.0-2'
};


//updateTheLibs(libs, latest);
console.log(libs);
/*
 Promise.all(libs.map((lib)=>{
 return utils.getContent(`https://api.cdnjs.com/libraries?search=${lib.name}&fields=version`);
 })).then((result)=>{

 var latestVersions = libs.reduce((map, {name}, i)=>{
 map[name] = result[i].results.filter(n=> n.name === name)[0].version;
 return map;
 }, {});

 updateTheLibs(libs, latestVersions);

 }, ()=>{console.log(arguments)}).catch((a)=>{console.log(a)});*/