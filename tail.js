const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(anArray) {
  return anArray.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);