let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplyNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let firstNumber = numbers[index];
  let secondNumber = numbers[index + 1];
  if (firstNumber !== numbers[9]) {
    multiplyNumbers.push(firstNumber * secondNumber);
  } else {
    multiplyNumbers.push(firstNumber * 2);
  }
}

console.log(multiplyNumbers);
