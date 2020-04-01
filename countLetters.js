const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(argsString) {
  let output = {};
  for (const value of argsString) {
    output = addToObject(output, value);
  }
  return output;
};

const addToObject = function(argsObject, argsString) {
  if (argsObject[argsString] !== undefined) {
    argsObject[argsString]++;
  } else {
    argsObject[argsString] = 1;
  }
  return argsObject;
};

let assertString = 'string';
for (let i = 0; i < 6; i++) {
  assertEqual(countLetters(assertString)[assertString.charAt(i)], 1);
}

console.log(countLetters('string'));

console.log(countLetters('sssstring'));
assertEqual(countLetters('aaufhaidsjvkbaf')['a'], 4);
console.log(countLetters('aaufhaidsjvkbaf'));
console.log(countLetters('ssssurejsidjfhudisjisdakvbfhuidsjkfhusjdkdftring'));
console.log(countLetters('4895621adsfasgaf54562'));
