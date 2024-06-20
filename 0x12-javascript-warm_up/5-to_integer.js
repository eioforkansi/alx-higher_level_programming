#!/usr/bin/node
/*
 * The scriptprints My number: <first argument converted in integer>
 * if the first argument can be converted to an integer:
 * If the argument can’t be converted to an integer, print “Not a number”
 */

const arg = process.argv.slice(2);
const number = parseInt(arg, 10);

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(number);
}
