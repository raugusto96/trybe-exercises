const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('1 - Compare se os objetos são completamente iguais', () => {
    expect(obj1).toEqual(obj2);
  });
  it('2 - Compare se os objetos são completamente diferentes', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});