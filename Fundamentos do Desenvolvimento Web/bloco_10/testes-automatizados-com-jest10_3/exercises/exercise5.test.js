const funcModule = require('./exercise4');
const { toUpperCase } = funcModule;

describe('Testa a função toUpperCase', () => {
  it('retornar o texto em caixa baixa', () => {
    const toLowerCase = jest.spyOn(funcModule, 'toUpperCase')
      .mockImplementation((string) => string.toLowerCase());

      expect(toLowerCase('XABLAU')).toBe('xablau');

      funcModule.toUpperCase.mockRestore();
      expect(toUpperCase('xablau')).toBe('XABLAU');
  });
});