const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(anArray) {
  return anArray.slice(1);
}
const words = ['thing 1', 'thing 2', 'thing 3']
console.log(tail(words));
assertEqual(words.length, 3);