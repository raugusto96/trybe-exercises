const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const output = [];
  for (const person in people) {
    output.push(`${greeting}${people[person]}`);
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);