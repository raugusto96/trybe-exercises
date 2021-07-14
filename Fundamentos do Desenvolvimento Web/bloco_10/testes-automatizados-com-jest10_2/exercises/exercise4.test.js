const getRepos = require('./exercise4');

describe('Testa a função getRepos', () => {
  it('should have an repo with the name: "sd-01-week4-5-project-todo-list" in the list', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    })
  });
});