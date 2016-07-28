module.exports = function (browser){
  browser
    .waitForElementVisible('h1', 1000)
    .assert.containsText('h1', 'Hello, World!')
    .end();
};

