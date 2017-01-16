var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  //must be in global
  var allChunks = '';
  https.get(requestOptions, function (response) {

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
getAndPrintHTML();