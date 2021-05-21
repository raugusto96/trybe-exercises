let n = 7;
let asterisco = '*';
let blankRow = '';

for (let row = 0; row < n; row += 1) {
  // percorro as linhas
  for (let column = 0; column < n; column += 1) {
    // percorro as colunas
    blankRow += asterisco; // adiciona um asterisco a cada coluna da minha linha
  }
  console.log(blankRow); // imprimo a linha
  blankRow = ''; // zero a linha antes de começar o processo de novo.
}
