const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

//Adicione seu código aqui
const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Fran'));
console.log();

// Every
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 17 },
];

//Adicione seu código aqui
const verifyAges = (arr, minimumAge) => Object.values(arr).every((people) => people.age >= minimumAge);

console.log(verifyAges(people, 18));