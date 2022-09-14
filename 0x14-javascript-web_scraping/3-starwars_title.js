#!/usr/bin/node

const axios = require('axios');

axios({
  url: 'https://swapi-api.hbtn.io/api/films/' + process.argv[2],
  method: 'GET'
})
  .then((reponse) => {
    console.log(reponse.data.title);
  }, (error) => {
    console.log(error.reponse);
  });
