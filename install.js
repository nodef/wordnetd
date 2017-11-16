const download = require('download-progress/lib/download-progress');
const tar = require('tar');
const cp = require('child_process');


// 1. settings
var url = 'http://wordnetcode.princeton.edu/1.6/wn16.unix.tar.gz';
var dest = 'index.tar.gz';
var path = '.';


// 2. download and extract
download([{url, dest}], {}).get((err) => {
  tar.extract({'file': dest}).then(() => {
    cp.execSync(
      'rm index.tar.gz && '+
      'mv wordnet-1.6/* . && '+
      'rmdir wordnet-1.6'
    );
  });
});
