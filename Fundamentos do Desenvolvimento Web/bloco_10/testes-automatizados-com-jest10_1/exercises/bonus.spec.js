const searchEmployee = require('./bonus');

describe('Testando a função searchEmployee', () => {
  it('1 - Testando se a função existe.', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('2 - Testando se searchEmployee(id, "firstName"), retorna o primeiro nome do usuário da id encontrada.', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  })
  it('3 - Testando se searchEmployee(id, "lastName"), retorna o último nome do usuário da id encontrada.', () => {
    const actual = searchEmployee('9852-2-2', 'lastName');
    const expected = 'Cook';
    
    expect(actual).toBe(expected);
  });
  it('4 - Testando se searchEmployee(id, "specialities"), retorna um array contendo as especialidades do usuário da id encontrada.', () => {
    const actual = searchEmployee('4456-4', 'specialities');
    const expected = ['Context API', 'RTL', 'Bootstrap'];

    expect(actual).toEqual(expected);
  });
  describe('Testando os erros', () => {
    
    it('5 - Testando se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir.', () => {
      expect(() => { 
        searchEmployee('1231-23', 'specialities')
      }).toThrow();
    });
    it('6 - Testando se a mensagem de erro é "ID não identificada".', () => {
      expect(() => { searchEmployee('1234-5', 'firstName')}).toThrowError(new Error('ID não identificada'));
    });
    it('7 - Testa se lança um erro se a função for chamada sem parametros', () => {
      expect(() => {
        searchEmployee()
      }).toThrow();
    });
    it('8 - Testa se a mensagem de erro para detalhe inexistente', () => {
      expect(() => { searchEmployee('4678-2', 'location') }).toThrowError(new Error('Detalhe indisponível'));
    });
  });
});
