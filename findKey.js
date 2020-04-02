const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, cb) => {
  let res;
  for (let key in obj) {
    if (cb(obj[key])) {
      return (res = key);
    }
  }
  return res;
};

let result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 5
);
let result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
);

assertEqual(result1, "noma");
assertEqual(result2, "noma");