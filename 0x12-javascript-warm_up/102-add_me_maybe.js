#!/usr/bin/node

/*
 * This function increments and calls a function.
 * The function is visible from outside
 * Prototype: function (number, theFunction)
 */

exports.addMeMaybe = function (x, func) {
  x++;
  func(x);
};
