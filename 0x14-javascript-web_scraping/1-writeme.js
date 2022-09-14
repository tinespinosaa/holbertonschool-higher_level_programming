#!/usr/bin/node
const fs = require('fs');
const sPath = process.argv[2];
const sTxT = process.argv[3];

fs.appendFile(sPath, sTxT, 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
});
