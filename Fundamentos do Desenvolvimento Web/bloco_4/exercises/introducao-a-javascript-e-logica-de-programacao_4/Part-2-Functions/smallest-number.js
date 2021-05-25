function receiveNumbers(numbers = []) {
  let number = numbers[0];
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < number) {
      number = numbers[index];
      result = index;
    }
  }
  return result;
}

console.log(receiveNumbers([2, 4, 6, 7, 10, 0, -3]));
