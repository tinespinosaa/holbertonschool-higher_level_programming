#!/usr/bin/node
const axios = require('axios');

axios.get(process.argv[2])
  .then(resp => {
    const dict = {};
    const data = resp.data;
    data.forEach(e => {
      if (e.completed === true) {
        if (dict[e.userId] === undefined) {
          dict[e.userId] = 0;
        }
        dict[e.userId]++;
      }
    });

    console.log(dict);
  })
  .catch(error => {
    console.log(error);
  });
