let grossSalary = 5189.81;
let baseSalary;
let netSalary;
let inss8 = grossSalary * 0.08;
let inss9 = grossSalary * 0.09;
let inss11 = grossSalary * 0.11;
let inssMax = 570.88;

if (grossSalary <= 1556.95) {
  baseSalary = grossSalary - inss8;
  console.log('Não paga IR.');
} else if ((grossSalary) => 1556.95 && grossSalary <= 2594.92) {
  baseSalary = grossSalary - inss9;
  if ((baseSalary) => 1903.99 && baseSalary <= 2826.65) {
    let ir7 = baseSalary * 0.075 - 142.8;
    netSalary = baseSalary - ir7;
    console.log('O salário líquido é: ' + netSalary.toFixed(2));
  }
} else if ((grossSalary) => 2594.93 && grossSalary <= 5189.82) {
  baseSalary = grossSalary - inss11;
  if ((baseSalary) => 2826.66 && baseSalary <= 3751.05) {
    let ir15 = baseSalary * 0.15 - 354.8;
    netSalary = baseSalary - ir15;
    console.log('O salário líquido é: ' + netSalary.toFixed(2));
  } else {
    let ir22 = baseSalary * 0.225 - 636.13;
    netSalary = baseSalary - ir22;
    console.log('O salário líquido é: ' + netSalary.toFixed(2));
  }
} else {
  baseSalary = grossSalary - inssMax;
  if ((baseSalary) => 3751.06 && baseSalary <= 4664.68) {
    let ir22 = baseSalary * 0.225 - 636.13;
    netSalary = baseSalary - ir22;
    console.log('O salário líquido é: ' + netSalary.toFixed(2));
  } else {
    let ir27 = baseSalary * 0.275 - 869.36;
    netSalary = baseSalary - ir27;
    console.log('O salário líquido é: ' + netSalary.toFixed(2));
  }
}
