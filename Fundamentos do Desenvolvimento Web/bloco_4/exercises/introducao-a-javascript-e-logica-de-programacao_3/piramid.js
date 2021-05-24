let n = 7;
let asterisk = '*';
let blankRow = '';
let temp = 0;

for (let row = 0; row < n; row += 1) {
  temp = row;
  blankRow = ' ';
  for (let column = 0; column < row + 2; column += 1) {
    if (column == n - temp) {
      blankRow += asterisk;
      temp -= 1;
    } else {
      blankRow += ' ';
    }
  }
  console.log(blankRow);
}
