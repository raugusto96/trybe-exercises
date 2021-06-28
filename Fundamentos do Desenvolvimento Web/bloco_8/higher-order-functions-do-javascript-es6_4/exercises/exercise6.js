const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// escreva seu código aqui
const average = (array) => array.reduce((acc, curr) => {
  const total = (acc + curr / array.length).toFixed(1);
  return parseFloat(total);
}, 0);

const studentAverage = (names, averages) => {
  const grade = averages.map((grade) => average(grade));
  return names.map((student, index) => ({name: student, average: grade[index]}));
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);