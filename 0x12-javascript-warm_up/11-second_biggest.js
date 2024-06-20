#!/usr/bin/node

/*
 * This script searches the second biggest integer in the list of arguments.
 * All arguments are assumed to be converted to integer
 * If no argument passed, print 0
 * If the number of arguments is 1, print 0
 */

const arg = process.argv.slice(2);
const num = arg.sort();

if (arg.length <= 2) {
  console.log('0');
} else {
  console.log(num[num.length - 2]);
}
