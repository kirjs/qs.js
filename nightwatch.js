module.exports = {
  "src_folders": [
    "tests/e2e"
  ],
  "test_settings": {
    "local": {
      "launch_url": "http://127.0.0.1:8080/"


    },
    "sauselabs": {

      desiredCapabilities: {
        browserName: "chrome",
        platform: "OS X 10.11",
        version: "47",
      },
      "launch_url": "http://127.0.0.1:8080/",
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "username": "kirjs",
      "access_key": process.env.SAUCE_ACCESS_KEY,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "globals": {
        "waitForConditionTimeout": 10000,
      },
    }
  }
}
;
