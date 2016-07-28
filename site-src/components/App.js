var React = require('react');
var Group = require('./Group');


module.exports = (props) =>{
  return <div id="playgrounds">
    {props.playgrounds.map(
      group => <Group data={group} key={group.key}/>
    )}
  </div>;
};
