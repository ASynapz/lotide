const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, string) {
  let output;
  console.log(object);
  for (const value in object) {
    output = matchValue(object, value, string);
    if (output !== undefined) {
      return output;
    }
  }
};

const matchValue = function(object, value, string) {
  console.log(`${string} comparing ${object[value]}`);
  if (string === object[value]) {
    console.log(`hit: ${string} comparing ${object[value]}`);
    return value;
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  sitcom: "That '70s Show",
  drama: "The Wire",
  fantasy: "The Mandalorian"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "sitcom");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Mandalorian"), "fantasy");