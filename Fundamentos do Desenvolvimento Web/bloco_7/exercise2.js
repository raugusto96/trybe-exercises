const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordemCrescente = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  
  return oddsAndEvens;
}

console.log(ordemCrescente());

// Seu código aqui com array.sort.
const ordemCrescente2 = (array) => {
  const arrayOrdenado = array.sort(function (a, b) {return a -b});

  return arrayOrdenado;
}

console.log(ordemCrescente2(oddsAndEvens));