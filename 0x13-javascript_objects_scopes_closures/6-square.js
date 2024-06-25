#!/usr/bin/node

/*
 * This is a class Square that defines a square and inherits from Rectangle of 4-rectangle.js
 * The constructor must take 1 argument: size
 * The constructor of Rectangle must be called (by using super())
 */

const SquareOriginal = require('./5-square.js');

module.exports = class Square extends SquareOriginal {
  constructor (size) {
    super(size);
    this.size = size;
  }

  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.size; i++) { console.log(c.repeat(this.size)); }
    }
  }
};
