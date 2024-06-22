#!/usr/bin/node

/*
 * This script has a class Rectangle that defines a rectangle:
 * The constructor must take 2 arguments w and h
 * Initialized attribute width with the value of w
 * Initialized attribute height with the value of h
 */

module.exports = class Rectangle {
  width;
  height;

  constructor (w, h) {
    this.height = h;
    this.width = w;
  }
};
