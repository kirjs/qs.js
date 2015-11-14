var container = document.getElementById('container');
var ref = new Firebase('https://j0nromqawyq.firebaseio-demo.com/');

ref.on('value', function(snapshot){
  container.innerHTML = snapshot.val().test;
});
