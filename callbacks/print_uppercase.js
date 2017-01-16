var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  html = html.toUpperCase();
  console.log(html);
}

getHTML(options, printUpperCase);