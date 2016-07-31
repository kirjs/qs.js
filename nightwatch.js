const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER

module.exports = {
  "src_folders": [
    "tests/e2e"
  ],
  "test_settings": {
    "local": {
      "launch_url": "http://127.0.0.1:8080/"
    },
    "saucelabs": {

      desiredCapabilities: {
        browserName: "chrome",
        platform: "OS X 10.11",
        version: "47",
        build: 'build-' + TRAVIS_JOB_NUMBER,
        'tunnel-identifier': TRAVIS_JOB_NUMBER,
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
