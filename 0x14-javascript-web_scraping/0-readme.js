#!/usr/bin/node
const fs = require('fs');
const sPath = process.argv[2];

fs.readFile(sPath, 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    console.log(data);
  }
});
