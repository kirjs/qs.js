var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('../components/App');
var copyTo = require('../utils').copyTo;

function generateMain(groups){
  var result = ReactDOMServer.renderToStaticMarkup(
    <App playgrounds={groups} />
  );

  copyTo('site/index.html', 'dist/index.html', {
    playgrounds: result
  });
}
module.exports = generateMain;
