#!/usr/bin/node

const request = require('request');
const args = process.argv;

if (args.length !== 3) {
  console.log(`Usage: node ${args[1]} <movieID>`);
  process.exit(1);
}

const movieId = args[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(JSON.parse(body).title);
});
