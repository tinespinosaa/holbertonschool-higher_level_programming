#!/usr/bin/node

const axios = require('axios');

axios.get('https://swapi-api.hbtn.io/api/films/' + process.argv[2])
  .then(response => {
    const data = response.data.characters;
    data.forEach(character => {
      axios.get(character)
        .then(resp => {
          console.log(resp.data.name);
        });
    });
  })
  .catch(error => {
    console.log(error);
  });
