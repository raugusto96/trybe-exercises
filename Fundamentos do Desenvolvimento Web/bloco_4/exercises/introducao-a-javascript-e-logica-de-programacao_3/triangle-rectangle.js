let n = 5;
let asterisco = '*';
let blankRow = '';

for (let row = 0; row < n; row += 1) {
  blankRow += asterisco;
  for (let column = 0; column < row; column += 1) {
    blankRow += asterisco;
  }
  console.log(blankRow);
  blankRow = '';
}
