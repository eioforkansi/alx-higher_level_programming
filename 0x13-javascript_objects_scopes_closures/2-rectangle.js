#!/usr/bin/node

/*
 * This script has a class Rectangle that defines a rectangle:
 * The constructor must take 2 arguments w and h
 * Initialized width with the value of w
 * Initialized height with the value of h
 * If w or h is equal to 0 or not a positive integer, create an empty object

*/

module.exports = class Rectange {
  constructor (w, h) {
    if (!(Number.isInteger(w) && w > 0) || !(Number(h) && h > 0)) {
      //
    } else {
      this.width = w;
      this.height = h;
    }
  }
};
