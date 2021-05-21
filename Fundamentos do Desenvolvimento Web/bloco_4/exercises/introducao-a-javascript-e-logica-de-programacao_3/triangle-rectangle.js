let n = 5;
let asterisco = '*';
let blankRow = '';

for (let row = 0; row < n; row += 1) {
  for (let column = 0; column < row + 1; column += 1) {
    blankRow += asterisco;
  }
  console.log(blankRow);
  blankRow = '';
}
