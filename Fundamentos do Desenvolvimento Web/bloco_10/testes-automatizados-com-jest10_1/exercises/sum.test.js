const sum = require('./sum');

describe('Requisito 1 - Função Soma', () => {
  it('1 - Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('2 - Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});