const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let l = arr.length;
  let res = [];
  if (l <= 2) {
    return res;
  }
  if (l % 2 == 1) {
    res.push(arr[Math.floor(l / 2)]);
  } else {
    res.push(arr[l / 2 - 1], arr[l / 2]);
  }
  return res;
};

module.exports = middle;