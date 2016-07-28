module.exports = {
  jsbin: function(browser){
    return  browser
      .url(browser.launch_url + 'angular')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.launch', 1000)
      .click('.launch')
      .waitForElementVisible('iframe', 1000)
      .frame(0)
      .waitForElementVisible('iframe', 1000000)
  }
};
