function sumNumbers(number) {
  let result = 0;
  for (let index = 1; index <= number; index += 1) {
    result += index;
  }
  return result;
}

console.log(sumNumbers(5));
