var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  html = html.toLowerCase();
  console.log(html);
}

getHTML(options, printLowerCase);