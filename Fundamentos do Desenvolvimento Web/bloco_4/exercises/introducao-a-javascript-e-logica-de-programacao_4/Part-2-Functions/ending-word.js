function compareEndWords(word, ending) {
  let firstWord = word.split('');
  let lastWord = ending.split('');
  let equalLetters = true;
  for (let index = 1; index < lastWord.length; index += 1) {
    if (firstWord[firstWord.length - lastWord.length + 1] != lastWord[index]) {
      equalLetters = false;
    }
  }
  return equalLetters;
}

console.log(compareEndWords('trybe', 'be'));
console.log(compareEndWords('joaofernando', 'fernan'));
