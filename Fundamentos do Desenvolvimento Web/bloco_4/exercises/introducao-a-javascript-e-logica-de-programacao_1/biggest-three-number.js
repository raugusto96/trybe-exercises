let a = 5;
let b = 120;
let c = 60;

if (a > b && b > c) {
  console.log('O número: ' + a + ' é maior que o número ' + b + ' e o número ' + c);
} else if (a < b && b > c) {
  console.log('O número: ' + b + ' é maior que o número ' + a + ' e o número ' + c);
} else {
  console.log('O número: ' + c + ' é maior que o número ' + a + ' e o número ' + b);
}