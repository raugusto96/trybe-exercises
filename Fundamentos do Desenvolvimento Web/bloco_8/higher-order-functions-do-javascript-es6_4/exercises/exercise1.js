const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// escreva seu código aqui
const flatten = (array) => array.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flatten(arrays));

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);