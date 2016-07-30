module.exports = function (browser){
  browser
    .waitForElementVisible('h2', 100000)
    .assert.containsText('h2', 'Ember.js')
    .end();
};

