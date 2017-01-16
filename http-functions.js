module.exports = function getHTML (options, callback) {
  /* Your code here */
  var https = require('https');

  var allChunks = '';
  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      allChunks += data;
    });

    response.on('end', function() {
      callback(allChunks);
    });
  });
};