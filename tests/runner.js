function jsbin(browser, launcher){
  return browser
    .url(browser.launch_url + 'jsbin/' + launcher)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('.launch', 1000)
    .click('.launch')
    .waitForElementVisible('iframe', 1000)
    .frame(0)
    .waitForElementVisible('iframe', 1000)
    .frame(0);
}

function jsfiddle(browser, launcher){
  return browser
    .url(browser.launch_url + 'jsfiddle/' + launcher)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('.launch', 10000000)
    .click('.launch')
    .waitForElementVisible('iframe', 1000)
    .frame(0);
}

function codepen(browser, launcher){
  return browser
    .url(browser.launch_url + 'codepen/' + launcher)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('.launch', 10000000)
    .click('.launch')
    .waitForElementVisible('iframe', 1000)
    .frame(0);
}

module.exports = function (test, launcher){
  return {
    jsbin: function (browser){
      test(jsbin(browser, launcher));
    },
    jsfiddle: function (browser){
      test(jsfiddle(browser, launcher));
    },
    codepen: function (browser){
      test(codepen(browser, launcher));
    }
  };
};
