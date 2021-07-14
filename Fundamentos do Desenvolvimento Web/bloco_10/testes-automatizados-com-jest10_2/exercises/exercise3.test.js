const {
  getUserName,
} = require('./exercise2');

describe('getUserName - promise', () => {
  describe('quando o user id exists', () => {
    it('retorna o nome do usuário', async () => {
      expect.assertions(1);
      await expect(getUserName(4)).resolves.toEqual('Mark');
    });
  });

  describe('quando o user id dont exist', () => {
    it('retorna um erro', async () => {
      expect.assertions(1);
      await expect(getUserName(8)).rejects.toEqual({ error: 'User with 8 not found.' });
    });
  });
});