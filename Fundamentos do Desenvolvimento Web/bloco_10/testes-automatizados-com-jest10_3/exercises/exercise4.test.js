const funcModule = require('./exercise4');

describe('Testa a função toUpperCase', () => {
  it('retornar o texto em caixa baixa', () => {
    const toLowerCase = jest.spyOn(funcModule, 'toUpperCase')
      .mockImplementation((string) => string.toLowerCase());

      expect(toLowerCase('XABLAU')).toBe('xablau');
  });
});

describe('Testa a função getFirstLetter', () => {
  it('retornar a última letra', () => {
    const getLastLatter = jest.spyOn(funcModule, 'getFirstLetter')
      .mockImplementation((string) => string.slice(-1));

      expect(getLastLatter('xablau')).toBe('u');
  });
});

describe('Testa a função concatenateTwoStrings', () => {
  it('retornar três strins concatenadas', () => {
    const concatenateThreeStrings = jest.spyOn(funcModule, 'concatenateTwoStrings')
      .mockImplementation((string1, string2, string3) => string1 + string2 + string3);

      expect(concatenateThreeStrings('xablau', 'panta', 'baeta')).toBe('xablaupantabaeta');
  });
});