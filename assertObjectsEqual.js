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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`Assert assertObjectsEqual Equal: \n${inspect(object1)} \n===  \n${inspect(object2)}`);
  } else {
    console.log(`Assert assertObjectsEqual Not Equal: \n${inspect(object1)} \n!== \n${inspect(object2)}`);
  }
};


const testA = {
  testcase1: "one",
  testcase2: "two"
}

const testB = {
  testcase2: "two",
  testcase1: "one"
}

const testC = {
  testcase2: "two",
  testcase1: ["one", 2, 3, "eight"]
}

const testD = {
  testcase1: "one",
  testcase2: "two"
}

const testE = {
  testcase1: ["one", 2, 3, "eight"],
  testcase2: "two"
}
assertObjectsEqual(testA, testB);
assertObjectsEqual(testC, testD);
assertObjectsEqual(testC, testE);