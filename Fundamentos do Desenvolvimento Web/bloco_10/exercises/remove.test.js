const myRemove = require('./remove');

describe('Requisito 2 - Função remove', () => {
  it('1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 4];
    expect(expected).toEqual(myRemove(array, 3));
  });
  it('2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toContain(array);
  });
  it('3 - Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(expected).toEqual(array);
  });
  it('4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(expected).toEqual(myRemove(array, 5));
  });
});