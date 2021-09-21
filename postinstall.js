const download = require('download-progress/lib/download-progress');
const tar = require('tar');
const fs = require('fs');


// 1. settings
var url = 'https://wordnetcode.princeton.edu/wn3.1.dict.tar.gz';
var dest = 'index.tar.gz';
var path = '.';


// 2. download and extract
download([{url, dest}], {}).get((err) => {
  tar.extract({'file': dest}).then(() => {
    fs.unlinkSync('index.tar.gz');
  });
});
