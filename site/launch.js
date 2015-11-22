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
    if (framework.config.jsfiddle && framework.config.jsfiddle.panel_js) {
      data.panel_js = framework.config.jsfiddle.panel_js;
    }

    post('http://jsfiddle.net/api/post/library/pure/', data);
  },
  codepen: function (framework){
    var data = framework.data;
    if (framework.config.codepen && framework.config.codepen.js_pre_processor) {
      data.js_pre_processor = framework.config.codepen.js_pre_processor;
    }

    post('http://codepen.io/pen/define/', {data: data});
  },

  jsbin: function (framework){
    var data = framework.data;
    data.javascript = data.js;
    post('http://jsbin.com?js,output', data);
  }
};


