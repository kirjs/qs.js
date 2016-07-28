var List = ng.Component({
  selector: 'app',
  template: '<h1>Hello, {{hello}}!</h1>'
}).Class({
  constructor: function (){
    this.hello = 'World';
  }
});

ng.bootstrap(List);
