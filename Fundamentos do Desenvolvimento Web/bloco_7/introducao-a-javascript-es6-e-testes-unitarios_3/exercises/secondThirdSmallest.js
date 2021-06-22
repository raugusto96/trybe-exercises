const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (item1, item2) {
      return item1 - item2;
  });
  results.push(array[1], array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const output = secondThirdSmallest(parameter);

assert.deepStrictEqual(output, result);