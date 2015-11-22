var fs = require('fs');
var copyTo = require('../utils').copyTo;
var path = require('path');
var playgrounds = require('../config').playgrounds;

function generateLauncher( launcher ){
  var playground = launcher.playground;
  var lib = launcher.lib;
  var dir = path.join('dist', playground.key, lib.key);
  var to =  path.join( dir , 'index.html');
  var configPath =  path.join( dir , 'config.js');
  copyTo('site/launcher.html', to, {
    title: playground.key + ' with ' + lib.key,
    author: lib.author,
    description: lib.description,
    playground: playground.label,
    lib: lib.key
  });
  fs.writeFileSync(configPath, 'var config = '+JSON.stringify(launcher)+';');
}

function generateLaunchers(groups){
  var launchers = [];
  groups.map((group) =>{
    group.items.map((item) =>{
      playgrounds.map((playground) =>{
        launchers.push( {
          lib: item,
          playground: playground
        });
      })
    });
  });

  launchers.map(generateLauncher);
}

module.exports = generateLaunchers;
