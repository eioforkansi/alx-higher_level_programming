#!/usr/bin/node

/*
 * This script has a function that converts a number from base 10 to another base passed as argument:
 * Prototype: exports.converter = function (base)
 * Not allowed to import any file
 * Not allowed to declare any new variable (var, let, etc..)
 */

exports.converter = function (base) {
  return function (number) {
    return number.toString(base);
  };
};
