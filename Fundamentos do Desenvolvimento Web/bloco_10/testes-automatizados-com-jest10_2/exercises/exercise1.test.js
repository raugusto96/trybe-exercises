const uppercase = require('./exercise1');

describe('Teste da funçao uppercase', () => {
  it('retorna "TEST" quando recebe "test" como parametro', (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    })
  });
});