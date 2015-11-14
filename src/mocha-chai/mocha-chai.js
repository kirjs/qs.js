mocha.setup('bdd');
var expect = chai.expect;

describe('A suite', function (){
  it('contains spec with an expectation', function (){
    expect(true).to.equal(true);
  });
});

mocha.run();
