function post(url, data) {
  var form = document.createElement("form");
  form.action = url;
  form.method = 'Post';
  form.target = "_blank";
  if (data) {
    for (var key in data) {
      if(data.hasOwnProperty(key)) {
        var input = document.createElement("textarea");
        input.name = key;
        input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        form.appendChild(input);
      }
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


var playgrounds = [
  {
    name: 'jsbin',
    launch: launchJsbin,
    label: 'JsBin'
  },
  {
    name: 'codepen',
    launch: launchCodePen,
    label: 'Codepen'
  }
];

var html = '<table>' + Object.keys(src).map(function (framework) {
    var item = src[framework];
    var result = '<tr><td>' + framework + '</td>';
    result += playgrounds.map(function (playground, name) {
      var config = item.config && item.config[playground.name] || {};
      var result = '<td>';

      if (config.url !== undefined) {
        if( config.url!==false){
          result += '<a href = "'+config.url+'" target="_blank">' + playground.label + '</a>';
        }
      }
      else {
        result += '<a href = "#" onclick = playgrounds["' + name + '"].launch("' + framework + '")>' + playground.label + '</a>';
      }
      result += '</td>';
      return result;
    }).join('');
    result += '</tr>';
    return result;
  }).join('') + '</table>';

document.write(html);
