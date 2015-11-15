var List = ng.Component({
  selector: 'app',
  template: '<div>Hello, {{hello}}!</div>'
}).Class({
  constructor: function (){
    this.hello = 'world';
  }
});

ng.bootstrap(List);
