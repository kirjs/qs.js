module.exports = function (browser){
  browser
    .waitForElementVisible('#canvas', 5000)
    // Probably would be better to check canvas dataUrl. But this should work
    // as a simple smoke test.
    .expect.element('canvas').to.have.attribute('width').which.equals(300) ;
};

