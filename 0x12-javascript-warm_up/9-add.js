#!/usr/bin/node

/*
 * This script prints the addition of 2 integers
 * The first argument is the first integer
 * The second argument is the second integer
 * The script use a function with this prototype: function add(a, b)
 */

function add (a, b) {
  const result = Number(a) + Number(b);
  return result;
}

const arg = process.argv.slice(2);

const answer = add(arg[0], arg[1]);
console.log(answer);
