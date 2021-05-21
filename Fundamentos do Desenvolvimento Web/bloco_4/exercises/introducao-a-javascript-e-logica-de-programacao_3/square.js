let n = 7;
let asterisco = '*';
let blankRow = '';

for (let row = 0; row < n; row += 1) {
  for (let column = 0; column < n; column += 1) {
    blankRow += asterisco;
  }
  console.log(blankRow);
  blankRow = '';
}
