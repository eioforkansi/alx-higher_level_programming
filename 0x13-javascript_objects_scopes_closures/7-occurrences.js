#!/usr/bin/node

/*
 * This is a script with the function that returns the number of occurrences in a list:
 * Prototype: exports.nbOccurences = function (list, searchElement)
 */

exports.nbOccurences = function (list, searchElement) {
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }

  return count;
};
