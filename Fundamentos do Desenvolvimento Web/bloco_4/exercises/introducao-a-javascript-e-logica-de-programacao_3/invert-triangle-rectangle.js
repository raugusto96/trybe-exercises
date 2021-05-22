let n = 5;
let count = 0;
let asterisk = '*';
let blankRow = '';

for (let row = 0; row < n; row += 1) {
  count = row;
  blankRow = ' ';
  for (let column = 0; column <= n; column += 1) {
    if (column == n) {
      blankRow += asterisk;
    } else if (column == n - count) {
      blankRow += asterisk;
      count -= 1;
    } else {
      blankRow += ' ';
    }
  }
  console.log(blankRow);
}
