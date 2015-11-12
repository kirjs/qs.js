function post(url, data) {
  var form = document.createElement("form");
  form.action = url;
  form.method = 'Post';
  form.target = "_blank";
  if (data) {
    for (var key in data) {
      var input = document.createElement("textarea");
      input.name = key;
      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
      form.appendChild(input);
    }
  }

  console.log(data);
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
}

function launchCodePen(framework) {
  post('http://codepen.io/pen/define/', {data: src[framework].data});
}
function launchJsbin(framework) {
  var data = src[framework].data;
  data.javascript = data.js;
  post('http://jsbin.com?js,output', data);
}


var html = '<table>' + Object.keys(src).map(function (framework) {
    var item = src[framework];
    return '<tr><td>' + framework + '</td>' +
      '<td><a href = "#" onclick = launchCodePen("' + framework + '")>CodePen</a></td>' +
      '<td><a href = "#" onclick = launchJsbin("' + framework + '")>JsBin</a></td>' +
      '</tr>';
  }).join('') + '</table>';

document.write(html);
