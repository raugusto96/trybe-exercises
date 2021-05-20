let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let arithmetic = sum / numbers.length;

if (arithmetic > 20) {
  console.log('O valor: ' + arithmetic + ' é maior que 20.');
} else {
  console.log('O valor: ' + arithmetic + ' é menor que 20.');
}
