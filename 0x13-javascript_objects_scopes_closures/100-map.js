#!/usr/bin/node

/*
 * The script import list from the file 100-data.js
 * Uses a map.
 * A new list is created with each value equal to the value of the initial list, multipled by the index in the list
 * Both the initial list and the new list are printed
 */

const list = require('./100-data.js').list;
const arr = list.map((x, y) => x * y);

console.log(list);
console.log(arr);
