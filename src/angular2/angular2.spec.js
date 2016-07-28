module.exports = function (browser){
  browser
    .waitForElementVisible('h1', 10000)
    .assert.containsText('h1', 'Hello, World!')
    .end();
};

