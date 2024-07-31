#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const args = process.argv;

if (args.length !== 4) {
  console.log(`Usage: ${args[1]} <URL> <filePath>`);
  process.exit(1);
}

const url = args[2];
const filePath = args[3];
request.get(url, (error, response, body) => {
  if (error) return console.log(error);

  try {
    fs.writeFileSync(filePath, body, 'utf-8');
  } catch (error) {
    console.log(error);
  }
});
