const download = require('download-file');
const unzip = require('unzip');
const fs = require('fs');


// 1. settings
var url = 'http://wordnetcode.princeton.edu/1.5/wn15.zip';
var filename = 'index.zip';
var path = '.';


// 2. download and extract
download(url, {filename}, (err) => {
  fs.createReadStream(filename).pipe(unzip.Extract({path}));
});
