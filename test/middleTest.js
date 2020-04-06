const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArraysEqual(middle([3, 4, 5, 6, 7, 8]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [6]);