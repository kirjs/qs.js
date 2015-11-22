var githubSrcLink = "https://github.com/kirjs/qs.js/tree/master/src/";
var React = require('react');

module.exports = (props) =>{
  var url = githubSrcLink + props.framework;
  var alt = '{props.framework} source on github';
  return <div className='source'>
    <a href={url} target='_blank'>
      <img src='GitHub-Mark-32px.png' alt={alt}/>
    </a>
  </div>;
};
