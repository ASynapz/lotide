const assertEqual = require('./assertEqual');

const tail = function(anArray) {
  return anArray.slice(1);
};

module.exports = tail;