#!/usr/bin/node

/*
 * This script searches the second biggest integer in the list of arguments.
 * All arguments are assumed to be converted to integer
 * If no argument passed, print 0
 * If the number of arguments is 1, print 0
 */

const arg = process.argv.slice(2);

if (arg.length <= 1) {
  console.log(0);
} else {
  const mapped = arg.map(Number);
  const num = mapped.sort((a, b) => a - b);
  console.log(num[num.length - 2]);
}
