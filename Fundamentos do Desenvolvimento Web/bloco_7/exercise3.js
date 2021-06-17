const fatorial = (number) => {
  let fatorado = 1;
  for (let index = 0; index < number; index += 1) {
    fatorado = fatorado * (index +1);
  }
  return fatorado;
}

console.log(fatorial(6));