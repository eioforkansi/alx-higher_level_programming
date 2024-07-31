#!/usr/bin/node

const request = require('request');
const args = process.argv;
const movieId = args[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) return console.log(error);
  JSON.parse(body).characters.forEach(character => {
    request.get(character, (error, response, body) => {
      console.log(JSON.parse(body).name);
    });
  });
});
