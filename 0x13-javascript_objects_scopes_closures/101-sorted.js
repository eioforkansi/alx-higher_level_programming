#!/usr/bin/node

/*
 * This script imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.
 * The script imports dict from the file 101-data.js
 * In the new dictionary:
 * A key is a number of occurrences
 * A value is the list of user ids
 * The new dictionary is printed  at the end
 */

const dict = require('./101-data.js').dict;

function invertDict (originalDict) {
  const newDict = {};

  for (const key in originalDict) {
    const occurence = originalDict[key];

    if (occurence in newDict) {
      newDict[occurence].push(key);
    } else {
      newDict[occurence] = [key];
    }
  }
  return newDict;
}

console.log(invertDict(dict));
