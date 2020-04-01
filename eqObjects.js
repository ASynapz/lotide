const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const value in object1) {
      if (compareKeyValues(object1[value], object2[value]) === false) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const compareKeyValues = function(argsObj1, argsObj2) {
  if (Array.isArray(argsObj1) === true || Array.isArray(argsObj2) === true) {
    return eqArrays(argsObj1, argsObj2);
  } else {
    if (argsObj1 === argsObj2) {
      return true;
    } else {
      return false;
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
const abb = { a: "1", b: "3" };
const aab = { a: "2", b: "2" };
assertEqual(eqObjects(ab, abc), false); 
assertEqual(eqObjects(ab, aab), false); 
assertEqual(eqObjects(ab, abb), false); 

const abd = { a: "1", b: "2", d: "3" };
assertEqual(eqObjects(abd, abc), false); 

console.log(`Array tests now:`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 