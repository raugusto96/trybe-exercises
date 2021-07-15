const myRemoveWithoutCopy = require('./my-remove-without-copy');

describe('Requisito 3 - Função myRemoveWithoutCopy', () => {
  it('1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3 ,4];
    const expected = [1, 2, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual(expected);
  });
  it('2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toContain(array);
  });
  it('3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).not.toEqual(expected);
  });
  it('4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array);
  });
});