#!/usr/bin/node

const axios = require('axios');
axios({
  method: 'GET',
  url: 'https://swapi-api.hbtn.io/api/films/' + process.argv[2]
})
  .then(async (response) => {
    for (const character of response.data.characters) {
      await axios.get(character)
        .then(res => {
          console.log(res.data.name);
        });
    }
  })
  .catch(error => {
    console.log(error);
  });
