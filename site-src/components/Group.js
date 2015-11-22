var React = require('react');
var Row = require('./Row');

module.exports = (props) =>{
  var items = props.data.items.map((item) =>{
    return <Row item={item} key = {item.key} />;
  });
  return <div>
    <h2>{props.data.key}</h2>
    {items}
  </div>
};
