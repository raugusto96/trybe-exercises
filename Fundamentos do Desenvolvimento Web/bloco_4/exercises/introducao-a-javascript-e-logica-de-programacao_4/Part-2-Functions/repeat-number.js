function receiveNumbers(numbers = []) {
  let repeatNumber = 0;
  for (let key in numbers) {
    repeatNumber = numbers[key];
    if (numbers[key] === repeatNumber) {
      return repeatNumber;
    }
  }
}

console.log(receiveNumbers([2, 3, 2, 5, 8, 2, 3]));
