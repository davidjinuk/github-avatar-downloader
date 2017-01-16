var https = require('https');

function getAndPrintHTML (options) {
  /* Add your code here */
  var allChunks = '';
    https.get(Options, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
        allChunks += data;
      });

      response.on('end', function() {
        //print all the chunks that were added into the variable
        console.log(allChunks);
      });
    });
}
//separate from the function getAndPrintHTML, can change the host and path
var Options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();