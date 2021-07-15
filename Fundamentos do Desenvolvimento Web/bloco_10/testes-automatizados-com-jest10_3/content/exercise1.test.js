const math = require('./exercise1');

describe('testando as funções do Math', () => {
  it('testa a função subtrair', () => {
    math.subtrair = jest.fn();
    
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  
  it('testa a função multiplicar', () => {
    math.multiplicar = jest
    .fn()
    .mockReturnValue(10);
    
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(5, 2)).toBe(10);
  });
  
  it('testa a função somar', () => {
    math.somar = jest.spyOn(math, 'somar')
    .mockReturnValue(5);
    
    math.somar(1, 2);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar()).toBe(5);
  });
  
  it('testa a função dividir', () => {
    math.dividir = jest.spyOn(math, 'dividir')
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);
    
    expect(math.dividir(4, 2)).toBe(2);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith(4, 2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  });

  it('testa a função subtrair', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a * b)
      .mockReturnValue(20);
    
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(2);

    mockSubtrair.mockReset();
    mockSubtrair.mockReturnValue(8);

    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
  });
});
  
