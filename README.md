# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @asynapz/lotide`

**Require it:**

`const _ = require('@asynapz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: Compares actual and expected arrays and returns passed or failed.
* assertEqual: Compares expected and actual values.
* assertObjectsEqual: Compares actual and expected objects and returns passed or failed.
* countLetters: Counts the number of character occurances in a string.
* countOnly: Counts the number of times a string occurs in an array.
* eqArrays: Compares two arrays and returns a boolean if the arrays are the same/different.
* eqObjects: Compares two objects and returns a boolean if the object are the same/different.
* findKey: Takes an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value.
* findKeyByValue: Takes in an object and a value. It scans the object and returns the first key with the given value.
* flatten: Takes an array within an array and creates a new array merging the two.
* head: Returns the first element of an array.
* letterPositions: Returns the index in which a letter occurs in a string within an array.
* map: Returns the first letter of each element in an array of strings.
* middle: Returns the middle value (of odd) or values (if even) in an array longer than two elements.
* tail: Removes the first element in an array and returns the remaining elements in a new array.
* takeUntil: Takes an array and a callback function. Returns a new array of items occuring until the point specified by the callback functions.
* without: Takes an array and items to remove. Returns a new array without the removed items.