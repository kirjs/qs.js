function post(url, data){
  var form = document.createElement("form");
  form.action = url;
  form.method = 'Post';
  if (data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var input = document.createElement("textarea");
        input.name = key;
        input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        form.appendChild(input);
      }
    }
  }

  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
}

var launchers = {
  jsfiddle: function (framework){
    var data = framework.data;
    data.wrap = 'b';
    var jsPreprocessorMap = {
      jsx: 3,
      es6: 3
    };

    if (framework.config.jsPreprocessor) {
      data.panel_js = jsPreprocessorMap[framework.config.jsPreprocessor];
    }

    post('http://jsfiddle.net/api/post/library/pure/', data);
  },
  codepen: function (framework){
    var jsPreprocessorMap = {
      jsx: 'babel',
      es6: 'babel'
    };

    var data = framework.data;

    if (framework.config.jsPreprocessor) {
      data.js_pre_processor = jsPreprocessorMap[framework.config.jsPreprocessor];
    }

    post('http://codepen.io/pen/define/', {data: data});
  },

  jsbin: function (framework){
    var data = framework.data;

    if (framework.config.jsPreprocessor) {
      data[framework.config.jsPreprocessor] = data.js;
      delete data.js;
    }

    post('http://jsbin.com?js,output', data);
  }
};


