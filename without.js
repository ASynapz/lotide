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

const without = function(sourceArr, itemToRemoveArr) {
  let res = [];
  for (item of sourceArr) {
    if (!itemToRemoveArr.includes(item)) {
      res.push(item);
    }
  }
  return res;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);