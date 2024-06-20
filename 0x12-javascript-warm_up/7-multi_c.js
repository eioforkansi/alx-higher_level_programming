#!/usr/bin/node

/*
 * This script that prints x times “C is fun”
 * Where x is the first argument of the script
 * If the first argument can’t be converted to an integer, print “Missing number of occurrences”
 */

const arg = process.argv.slice(2);
const number = parseInt(arg, 10);

if (isNaN(number)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < number; i++) {
    console.log('C is fun');
  }
}
