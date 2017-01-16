var https = require('https');

function getHTML (options, callback) {
  /* Add your code here */
  var allChunks = '';
  https.get(Options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      allChunks += data;
    });

    response.on('end', function() {
      callback(allChunks);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var Options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(Options, printHTML);