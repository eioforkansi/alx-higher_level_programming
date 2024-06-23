#!/usr/bin/node

/*
 * This is a script with the class Rectangle that defines a rectangle:
 * The constructor takes 2 arguments: w and h
 * If w or h is equal to 0 or not a positive integer, create an empty object
 * The method called print(), prints the rectangle using the character X
 */

module.exports = class Rectangle {
  constructor (w, h) {
    if (!(Number.isInteger(w) && w > 0) || !(Number.isInteger(h) && h > 0)) {
      //
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let result = '';

    for (let i = 0; i < this.height; i++) {
      result = 'X';
      for (let x = 0; x < this.width - 1; x++) {
        result += 'X';
      }
      console.log(result);
      result = '';
    }
  }
};
