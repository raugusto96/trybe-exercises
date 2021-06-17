const biggestWord = (phrase) => {
  const splitedPhrase = phrase.split(' ');
  let biggest = 0;
  let biggestWord = '';
  for (let word in splitedPhrase) {
    if (biggest < splitedPhrase[word].length) {
      biggest = splitedPhrase[word].length;
      biggestWord = splitedPhrase[word];
    }
  }
  return biggestWord;
}

console.log(biggestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`));