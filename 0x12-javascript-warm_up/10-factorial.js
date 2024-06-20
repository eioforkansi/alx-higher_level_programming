#!/usr/bin/node

/*
 * This script that computes and prints a factorial
 * The first argument is integer (argument can be cast as integer) used for computing the factorial
 * Factorial of NaN is 1
 */

function fact (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * fact(num - 1);
}

const arg = process.argv.slice(2);

console.log(fact(+arg));
