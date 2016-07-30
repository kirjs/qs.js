module.exports = function (browser){
  browser
    .waitForElementVisible('.description', 100000)
    .assert.containsText('.description', 'Hello, World!')
    .end();
};

