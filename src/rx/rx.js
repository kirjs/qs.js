Rx.Observable.just('<h1>Hello, World!</h1>').subscribe(
  function(data){
    document.getElementById('container').innerHTML = data;
  }
);


