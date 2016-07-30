module.exports = function (browser){
  browser
    .waitForElementVisible('.highcharts-container svg', 100000)
    .assert.containsText('.highcharts-container svg', 'Hello, World!')
    .end();
};

