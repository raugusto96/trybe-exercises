const mapString = (object, string) => {
  const mappedString = string.split('').map((letter) => {
    if (object[letter]) return object[letter]
    return letter;
  })
  return mappedString.join('');
}

const encode = (string) => {
  const code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  return mapString(code, string);
}

// console.log(encode('hi there'));

const decode = (string) => {
  const code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  return mapString(code, string);
}

// console.log(decode('h3 th2r2'));

describe('Requisito 6 - Funções encode e decode', () => {
  it('1 - Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('xixi')).toEqual('x3x3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('nunu')).toEqual('n5n5');
  });
  it('3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('x3x3')).toEqual('xixi');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('n5n5')).toEqual('nunu');
  });
  it('4 - Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('h')).toEqual('h');
    expect(decode('z')).toEqual('z');
    expect(decode('j')).toEqual('j');
  });
  it('5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('hi there').length).toBe(8);
    expect(decode('h3 th2r2').length).toBe(8);
  });
});