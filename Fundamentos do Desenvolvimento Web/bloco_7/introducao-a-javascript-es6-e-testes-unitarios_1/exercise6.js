const findX = (string) => {
  const stringParameter = 'Tryber x aqui';
  const newString = stringParameter.replace('x', string);
  return newString;
}

// console.log(findX('Leticia'));

let skills = ['let', 'const', 'template literals', 'arrow functions', 'ternary operator'];

const concat = (result) => {
  const string2 = 'Minhas cinco princípais skills são:';
  const string3 = '#goTrybe.';
  const skillOrdenada = skills.sort();

  return `${result}
  ${string2}
  ${skillOrdenada[0]}
  ${skillOrdenada[1]}
  ${skillOrdenada[2]}
  ${skillOrdenada[3]}
  ${skillOrdenada[4]}
${string3}`;
}

console.log(concat(findX('Rodris')));