const download = require('download-progress/lib/download-progress');
const tar = require('tar');
const cp = require('child_process');


// 1. settings
var url = 'http://wordnetcode.princeton.edu/2.0/WordNet-2.0.tar.gz';
var dest = 'index.tar.gz';
var path = '.';


// 2. download and extract
download([{url, dest}], {}).get((err) => {
  tar.extract({'file': dest}).then(() => {
    cp.execSync(
      'rm index.tar.gz && '+
      'mv WordNet-2.0/* . && '+
      'rmdir WordNet-2.0'
    );
  });
});
