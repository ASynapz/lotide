const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed: ", arr1, " === ", arr2);
  } else {
    console.log("Assertion Failed: ", arr1, " !== ", arr2);
  }
};

const takeUntil = (arr, cb) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!cb(item)) {
      res.push(item);
    } else {
      return res;
    }
  }
  return res;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);