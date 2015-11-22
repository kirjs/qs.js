var React = require('react');
var Group=  require('./Group');

var renderGroup = (group) =>{
  return <Group data={group} key={group.key}/>;
};

module.exports = (props) =>{
  return <div id="playgrounds">
    {props.playgrounds.map(renderGroup)}
  </div>;
};
