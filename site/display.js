var githubSrcLink = "https://github.com/kirjs/qs.js/tree/master/src/";
function post(url, data) {
  var form = document.createElement("form");
  form.action = url;
  form.method = 'Post';
  form.target = "_blank";
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

  console.log(data);
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
}

function launchJsFiddle(framework) {
  var data = src[framework].data;
  data.wrap = 'b';
  if (src[framework].config.jsfiddle && src[framework].config.jsfiddle.panel_js) {
    data.panel_js = src[framework].config.jsfiddle.panel_js;
  }

  post('http://jsfiddle.net/api/post/library/pure/', data);
}

function launchCodePen(framework) {
  var data = src[framework].data;
  if (src[framework].config.codepen && src[framework].config.codepen.js_pre_processor) {
    data.js_pre_processor = src[framework].config.codepen.js_pre_processor;
  }

  post('http://codepen.io/pen/define/', {data: data});
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
  },
  {
    name: 'jsfiddle',
    launch: launchJsFiddle,
    label: 'JsFiddle'
  }
];

function groupItems(items) {
  return items.reduce(function (result, item) {
    var group = item.config.group || 'Other';
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
}

function toArray(items) {
  return Object.keys(items).map(function (key) {
    var item = items[key];
    item.key = key;
    return item;
  })

}

var groups = groupItems(toArray(src));


function renderItem(item) {
  framework = item.key;
  var result = '<div class = "item">' +
    '<div class = "info">' +
    '<div class="framework">' + framework + '</div>' +
    '<div class = "author">by ' + item.author + '</div>' +
    '</div>';
  result += playgrounds.map(function (playground, name) {
    var config = item.config && item.config[playground.name] || {};
    var result = '<div class = "playground ' + playground.name + '">';

    if (config.url !== undefined) {
      if (config.url !== false) {
        result += '<a href = "' + config.url + '" target="_blank">' + playground.label + '</a>';
      }
    }
    else {
      result += '<a onclick = playgrounds["' + name + '"].launch("' + framework + '")>' + playground.label + '</a>';
    }

    result += '</div>';

    return result;
  }).join('');
  result += '<div class = "source">' +
    '<a href = "' + githubSrcLink + framework + '" target="_blank"><img src="GitHub-Mark-32px.png" alt="'+framework+' source on github"></a></div>';
  result += '</div>';
  return result;
}

function renderGroup(group, key) {
  return '<div><h2>' + key + '</h2>' + group.map(renderItem).join('') + '</div>';
}
var html = Object.keys(groups).map(function (key) {
  return renderGroup(groups[key], key);
}).join('');

document.getElementById('playgrounds').innerHTML = html;
