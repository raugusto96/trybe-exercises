let nota = 80;

if (nota >= 0 && nota <= 100) {
  if (nota >= 90) {
    nota = 'A';
    console.log('Sua nota é ' + nota);
  } else if (nota >= 80) {
    nota = 'B';
    console.log('Sua nota é ' + nota);
  } else if (nota >= 70) {
    nota = 'C';
    console.log('Sua nota é ' + nota);
  } else if (nota >= 60) {
    nota = 'D';
    console.log('Sua nota é ' + nota);
  } else if (nota >= 50) {
    nota = 'E';
    console.log('Sua nota é ' + nota);
  } else if (nota < 50) {
    nota = 'F';
    console.log('Sua nota é ' + nota);
  }
} else {
  console.log('Sua nota é menor que 0 ou maior que 100');
}
