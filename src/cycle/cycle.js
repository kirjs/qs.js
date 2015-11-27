let {h, makeDOMDriver} = CycleDOM;

function main(responses) {
  return {
    DOM: responses.DOM.select('.field')
      .events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        h('div', [
          h('label', 'Name:'),
          h('input.field', {attributes: {type: 'text'}}),
          h('h1', 'Hello ' + name)
        ])
      )
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
