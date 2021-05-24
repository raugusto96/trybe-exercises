function receiveNames(names = []) {
  let firstName = names[0];
  let biggestName = '';
  for (let key in names) {
    if (names[key].length > biggestName.length) {
      biggestName = names[key];
    }
  }
  return biggestName;
}

console.log(
  receiveNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
