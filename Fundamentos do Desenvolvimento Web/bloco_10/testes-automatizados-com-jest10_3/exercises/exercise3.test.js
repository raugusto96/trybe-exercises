const funcModule = require('./exercise1');

describe('Testando a função randomNumber', () => {
  it('retornar a multiplicação de três parametros ', () => {
    const spiedRandomNumber = jest.spyOn(funcModule, 'randomNumber')
      .mockImplementation((num1, num2, num3) => num1 * num2 * num3);


      expect(spiedRandomNumber(10, 2, 5)).toBe(100);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber).toHaveBeenCalledWith(10, 2, 5);
  });
});