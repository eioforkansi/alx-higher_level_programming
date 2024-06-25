#!/usr/bin/node

/*
 * This script has  a function that returns the reversed version of a list:
 * Prototype: exports.esrever = function (list)
 * Not allowed to use the built-in method reverse
 */

exports.esrever = function (list) {
  const sample = [];
  for (let i = list.length - 1; i >= 0; i--) {
    sample.push(list[i]);
  }
  return sample;
};
