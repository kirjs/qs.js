Rx.Observable.just('Hello World!').subscribe(
  function(data){
    document.getElementById('container').innerHTML = data;
  }
);


