module.exports = function (browser){
  browser
    .waitForElementVisible('svg', 100000)
    .assert.containsText('svg', 'Hello, World!')
    .end();
};

