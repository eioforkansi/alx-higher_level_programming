#!/usr/bin/node

const request = require('request');
const args = process.argv;
const url = args[2];

request.get(url, (err, response) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('code:', response.statusCode);
});
