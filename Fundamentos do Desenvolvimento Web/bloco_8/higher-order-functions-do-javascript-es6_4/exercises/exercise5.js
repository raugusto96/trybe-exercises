const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// escreva seu código aqui
const containsA = (array) => array.reduce((acc, curr) =>
acc + curr.split('').reduce((accumulator, current) =>
current === 'a' || current === 'A' ? accumulator +1 : accumulator, 0), 0);

assert.deepStrictEqual(containsA(names), 20);