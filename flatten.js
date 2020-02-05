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
    console.log("😄😄😄Assertion Passed: ", arr1, " === ", arr2);
  } else {
    console.log("😓😓😓Assertion Failed: ", arr1, " !== ", arr2);
  }
};

const flatten = function(arr) {
  let res = [];
  for (item of arr) {
    if (Array.isArray(item)) {
      for (el of item) {
        res.push(el);
      }
    } else {
      res.push(item);
    }
  }
  return res;
};

const flattenDeep = function(arr) {
  let res = [];
  for (item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flattenDeep(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], [5, [6]]]));
console.log(flatten([1, [2, [3, [4, 5, 6], 7], 8], 9]));

console.log(flattenDeep([1, 2, [3, 4], 5, [6]]));
console.log(flattenDeep([1, 2, [3, 4], [5, [6]]]));
console.log(flattenDeep([1, [2, [3, [4, 5, 6], 7], 8], 9]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);