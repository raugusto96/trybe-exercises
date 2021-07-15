const funcModule = require('./exercise1');

describe('Testando a função randomNumber', () => {
  it('Testando a função', () => {
    const spiedRandomNumber = jest.spyOn(funcModule, 'randomNumber')
      .mockReturnValue(10);
  
      expect(spiedRandomNumber()).toBe(10);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
  });
});