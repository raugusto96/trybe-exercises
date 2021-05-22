let n = 5;
let asterisk = '*';
let blankRow = '';
let count = 0;

for (let row = 0; row < n; row += 1) {
  count = row;
  blankRow = ' ';
  for (let column = 0; column < row + 2; column += 1) {
    if (column == n - count) {
      blankRow += asterisk;
      count -= 1;
    } else {
      blankRow += ' ';
    }
  }
  console.log(blankRow);
}
