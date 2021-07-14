beforeEach(() => console.log('1 - beforeEach')); // Primeiro console
afterEach(() => console.log('1 - afterEach')); // Terceiro e ultimo console

test('', () => console.log('1 - test')); // Segundo console

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // Quarto console
  afterEach(() => console.log('2 - afterEach')); // Quinto console

  test('', () => console.log('2 - test')); // Sexto console
});

