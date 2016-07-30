module.exports = function (browser){
  browser
    .waitForElementVisible('h1', 5000)
    .assert.containsText('h1', 'Hello, World!')
    .end();
};

