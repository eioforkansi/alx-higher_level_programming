#!/usr/bin/node
/*
 * This script prints a square
 * The first argument is the size of the square
 * If the first argument can’t be converted to an integer, print “Missing size”
 * You must use the character X to print the square
 */

const arg = process.argv.slice(2);
const num = parseInt(arg, 10);

if (isNaN(num)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < num; i++) {
    let result = '';
    for (let z = 0; z < num; z++) {
      result += 'X';
    }
    console.log(result);
  }
}
