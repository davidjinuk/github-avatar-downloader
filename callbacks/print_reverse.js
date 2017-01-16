var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  var reverse = '';
  for (var i = html.length; i >= 0; i--) {
    reverse += html.charAt(i);
  }
  console.log(html);
}

getHTML(options, printReverse);