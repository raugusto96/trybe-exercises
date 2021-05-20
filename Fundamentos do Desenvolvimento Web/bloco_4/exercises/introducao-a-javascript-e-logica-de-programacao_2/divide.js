let numbers = [];
let number = 0;

for (let index = 0; index < 25; index += 1) {
  number += 1;
  numbers.push(number);
}

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let numArray = numbers[index];
  result = numArray / 2;
  console.log(
    'O resultado da divisão do número -> ' + numArray + ' é: ' + result
  );
}
