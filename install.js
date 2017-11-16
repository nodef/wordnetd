const download = require('download-progress/lib/download-progress');
const unzip = require('unzip');
const fs = require('fs');


// 1. settings
var url = 'http://wordnetcode.princeton.edu/1.5/wn15.zip';
var dest = 'index.zip';
var path = '.';


// 2. download and extract
download([{url, dest}], {}).get((err) => {
  fs.createReadStream(dest).pipe(unzip.Extract({path}));
});
