const getUserName = require('./exercise2');

describe('getUserName - promise', () => {
  describe('quando o user id exists', () => {
    it('retorna o nome do usuário', () => {
      expect.assertions(1);
      return getUserName(4).then((data) => expect(data).toEqual('Mark'));
    });
  });

  describe('quando o user id dont exist', () => {
    it('retorna um erro', () => {
      expect.assertions(1);
      return getUserName(8).catch(error => 
        expect(error).toEqual({ error: 'User with 8 not found.' })
        );
    });
  });
});