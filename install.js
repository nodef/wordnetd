const download = require('download-file');

var url = 'http://wordnetcode.princeton.edu/1.5/wn15.zip';
var filename = 'index.zip';
download(url, {filename}, (err) => {
  console.log('meow');
});
