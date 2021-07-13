const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 4 - Função myFizzBuzz', () => {
  it('1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    const number = 15;
    const expected = 'fizzbuzz';
    expect(expected).toEqual(myFizzBuzz(number));
  });
  it('2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    const number = 3;
    const expected = 'fizz';
    expect(expected).toEqual(myFizzBuzz(number));
  });
  it('3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    const number = 5;
    const expected = 'buzz';
    expect(expected).toEqual(myFizzBuzz(number));
  });
  it('4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    const number = 4;
    expect(number).toBe(myFizzBuzz(number));
  })
  it('5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    const number = '4';
    const expected = false;
    expect(expected).toBe(myFizzBuzz(number));
  })
});