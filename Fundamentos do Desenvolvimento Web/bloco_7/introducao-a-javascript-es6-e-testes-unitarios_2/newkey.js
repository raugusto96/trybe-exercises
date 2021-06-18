const love = {
  firstName: 'Francielle',
  age: 24,
  job: 'Arquitect',
};

let newKey = 'lastName';
const lastName = 'Ferraz';
love[newKey] = lastName;
console.log(love);

newKey = 'fullName';
const fullName = `${love.firstName} ${love.lastName}`;
love[newKey] = fullName;
console.log(love);