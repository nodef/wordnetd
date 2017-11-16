const download = require('download-progress/lib/download-progress');
const unzip = require('unzip');
const fs = require('fs');


// 1. settings
var url = 'http://wordnetcode.princeton.edu/1.5/wn15.zip';
var dest = 'index.zip';
var path = '.';


// 2. download and extract
download([{url, dest}], {}).get((err) => {
  var wrt = unzip.Extract({path});
  fs.createReadStream(dest).pipe(wrt);
  wrt.on('finish', () => fs.unlinkSync(dest));
});
