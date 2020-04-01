
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
    console.log("😊😊😊Assertion Passed: ", arr1, " === ", arr2);
  } else {
    console.log("😭😭😭Assertion Failed: ", arr1, " !== ", arr2);
  }
};

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

assertArraysEqual(middle([3, 4, 5, 6, 7, 8]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [5, 6]);
assertArraysEqual(middle([4, 5, 6, 7, 8]), [6]);