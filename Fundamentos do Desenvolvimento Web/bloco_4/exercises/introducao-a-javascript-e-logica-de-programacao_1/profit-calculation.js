let cost = 50.99;
let price = 79.95;
let tax = cost * 0.2;
let costTotal = cost + tax;

if (costTotal > 0 && price > 0) {
  let profit = price - costTotal;
  console.log('O lucro em cima de um produto é: ' + profit.toFixed(2));
  console.log('O lucro em cima de mil produtos será: ' + profit * 1000);
} else {
  console.log('O custo ou valor de venda precisa ser maior que 0');
}
