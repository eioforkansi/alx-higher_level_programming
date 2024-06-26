#!/usr/bin/node

/*
 * This script concats 2 files.
 * The first argument is the file path of the first source file
 * The second argument is the file path of the second source file
 * The third argument is the file path of the destination
 */

const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

fs.readFile(fileA, 'utf8', (err, dataA) => {
  if (err) {
    console.error(`Failed to read ${fileA}`, err);
    process.exit(1);
  }

  fs.readFile(fileB, 'utf8', (err, dataB) => {
    if (err) {
      console.error(`Failed to read ${fileB}`, err);
      process.exit(1);
    }

    const dataNew = dataA + dataB;

    fs.writeFile(fileC, dataNew, 'utf8', (err) => {
      if (err) {
        console.error('Failed to write file', err);
        process.exit(1);
      }
    });
  });
});
