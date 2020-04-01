const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    results = evaluateChar(results, i, sentence.charAt(i));
    
  }
  return results;
};
const evaluateChar = function(object, index, char) {
  if (object[char] !== undefined) {
    object[char].push(index);
  } else {
    object[char] = [index];
  }
  return object;
};

assertEqual(eqArrays(Object.keys(letterPositions('hello')), ['h', 'e', 'l', 'o']), true);
assertEqual(eqArrays(Object.values(letterPositions('hello')["h"]), [0]), true);
assertArraysEqual(letterPositions("hello").e, [1]);

console.log(Object.values(letterPositions('hello')));