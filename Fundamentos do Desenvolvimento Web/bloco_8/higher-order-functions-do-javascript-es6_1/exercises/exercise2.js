// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

const generateRandomNumber = (number) => Math.floor(Math.random()* 6);

const verifyNumber = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } return false;
}

const resultRaffle = (betNumber, callback) => {
  const randomNumber = generateRandomNumber();
  if (callback(betNumber, randomNumber) === 'true') {  
  return 'Parabéns, você ganhou';
  } return 'Tente novamente';
}

console.log(resultRaffle(generateRandomNumber, verifyNumber));