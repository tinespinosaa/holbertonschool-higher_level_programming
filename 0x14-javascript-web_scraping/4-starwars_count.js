#!/usr/bin/node
const axios = require('axios');

axios({
  url: process.argv[2],
  method: 'GET'
})
  .then(response => {
    let count = 0;
    for (const movie of response.data.results) {
      for (const character of movie.characters) {
        if (character.includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }, (error) => {
    console.log(error.response);
  });
