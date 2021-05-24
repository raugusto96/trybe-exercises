function verifyPalindrome(word) {
  for (let index = 0; index < word.length; index += 1) {
    let lastLetter = word[word.length - index - 1];
    if (lastLetter !== word[index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verifyPalindrome('arara'));
