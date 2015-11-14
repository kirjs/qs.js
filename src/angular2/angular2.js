var List = ng.Component({
  selector: 'list',
  directives: [ng.NgFor],
  template: '<div>Hello, {{hello}}!</div>'
}).Class({
  constructor: function (){
    this.hello = 'world';
  }
});

ng.bootstrap(List);
