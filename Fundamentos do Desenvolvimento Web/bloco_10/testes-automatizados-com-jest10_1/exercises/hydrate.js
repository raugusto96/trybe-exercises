// Original
function hydrate(string) {
  let regex = /\d+/g;
  let numberMatch;
  let stringToNumber = 0;
  let count = 0;
  while ((numberMatch = regex.exec(string))) {
    stringToNumber = Number(numberMatch[0]);
    count += stringToNumber;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}

// Refatorada
const hydrate2 = (string) => {
  const regex = /\d+/g;
  const numbers = string.match(regex);
  const total = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
  return total === 1 ? `${total} copo de água` : `${total} copos de água`;
};

module.exports = hydrate2;