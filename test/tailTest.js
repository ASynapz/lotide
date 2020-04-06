 const tail=require("../tail");
const assert = require('chai').assert;
const result = ["Hello", "Lighthouse", "Labs"];
const words = ["Yo Yo", "Lighthouse", "Labs", "Jello"];

describe("#tail", () => {
  it("returns Array for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.isArray(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns new array of length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(result).length, 2);
  });

  it("returns new array of length 3 ['Yo Yo', 'Lighthouse', 'Labs', 'Jello']", () => {
    assert.strictEqual(tail(words).length, 3);
  });
  
});