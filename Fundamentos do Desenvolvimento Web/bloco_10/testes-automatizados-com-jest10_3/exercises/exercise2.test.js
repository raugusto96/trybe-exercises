const funcModule = require('./exercise1');

describe('Testando a função randomNumber', () => {
  it('retorna a divisão de dois numeros', () => {
    const spiedRandomNumber = jest.spyOn(funcModule, 'randomNumber')
      .mockImplementation((num1, num2) => num1 / num2);

      expect(spiedRandomNumber(10, 2)).toBe(5);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber).toHaveBeenCalledWith(10, 2);
  });
});