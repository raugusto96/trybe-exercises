const getUserName = require('./exercise2');

// Com try/catch
describe('getUserName - async/await', () => {
  describe('quando o user id exists', () => {
    it('retorna o nome do usuário', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('quando o user id dont exist', () => {
    it('retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(8);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 8 not found.' });
    }
  });
});
});

// Sem try/catch
describe('getUserName - resolves/rejects', () => {
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