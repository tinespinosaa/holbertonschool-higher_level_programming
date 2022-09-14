#!/usr/bin/node
const fs = require('fs');
const axios = require('axios');

axios({
  url: process.argv[2],
  method: 'GET'
})
  .then(reponse => {
    fs.appendFile(process.argv[3], reponse.data, 'utf-8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
