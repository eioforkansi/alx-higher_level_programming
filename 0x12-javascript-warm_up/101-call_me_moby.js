#!/usr/bin/node
/*
 * This function executes x times a function.
 * The function is  visible from outside
 * Prototype: function (x, theFunction)
 */

exports.callMeMoby = function (x, func) {
  for (let i = 0; i < x; i++) {
    func();
  }
};
