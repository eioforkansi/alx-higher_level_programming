#!/usr/bin/node

const args = process.argv.slice(2);
let message;

if (args.length === 0) {
  message = 'No argument';
} else {
  message = 'Argument found';
}
console.log(message);
