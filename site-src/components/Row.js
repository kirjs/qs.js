var Source = require('./Source');
var React = require('react');
var playgroundList = require('../config').playgrounds;

module.exports = (props) =>{
  var item = props.item;
  var author;
  if (item.author ) {
    author = <div className='author'>
      {item.author !== 'Kirill Cherkashin' ? item.author: ''}
    </div>;
  }

  var playgrounds = playgroundList.map((playground)=>{

    var url = playground.key + '/' + item.key + '?autostart';
    if(item.config[playground.key] && item.config[playground.key].url){
      url = item.config[playground.key].url;
    }
    return <div className='playground' key = {playground.key}>
      <a href={url} target='_blank'>{playground.key}</a>
    </div>
  });

  return <div className='item'>
    <div className='info'>
      <div className='framework'>{item.key}</div>
      {author}
    </div>
    {playgrounds}
    <Source framework={item.key}/>
  </div>
};

