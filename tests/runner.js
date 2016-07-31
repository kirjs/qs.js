var defaulWaitPeriod = 5000;
function jsbin(browser, launcher){
  return browser
    .url(browser.launch_url + 'jsbin/' + launcher)
    .waitForElementVisible('body', defaulWaitPeriod)
    .waitForElementVisible('.launch', defaulWaitPeriod)
    .click('.launch')
    .waitForElementVisible('iframe', defaulWaitPeriod)
    .frame(0)
    .waitForElementVisible('iframe', defaulWaitPeriod)
    .frame(0);
}

function jsfiddle(browser, launcher){
  return browser
    .url(browser.launch_url + 'jsfiddle/' + launcher)
    .waitForElementVisible('body', defaulWaitPeriod)
    .waitForElementVisible('.launch', defaulWaitPeriod)
    .click('.launch')
    .waitForElementVisible('iframe', defaulWaitPeriod)
    .frame(0);
}

function codepen(browser, launcher){
  return browser
    .url(browser.launch_url + 'codepen/' + launcher)
    .waitForElementVisible('body', defaulWaitPeriod)
    .waitForElementVisible('.launch', defaulWaitPeriod)
    .click('.launch')
    .waitForElementVisible('iframe', defaulWaitPeriod)
    .frame(0);
}

module.exports = function (test, launcher){
  return {
    //jsbin: function (browser){
    //  test(jsbin(browser, launcher));
    //},
    jsfiddle: function (browser){
      test(jsfiddle(browser, launcher));
    },
   // codepen: function (browser){
   //   test(codepen(browser, launcher));
   // }
  };
};
