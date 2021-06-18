const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => {
  const turn = {[key]: value}
  Object.assign(object, turn);
}

addTurn(lesson2, 'turno', 'manhã');
addTurn(lesson1, 'turno', 'noite');
addTurn(lesson3, 'turno', 'manhã');

console.log(lesson1);
console.log(lesson2);
console.log(lesson3);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 
const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto. 
const showLength = (object) => Object.entries(object).length;

console.log(showLength(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 
const listValues = (object) => Object.values(object);

console.log(listValues(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
const totalStudents = (object) => {
  const lesson = Object.keys(object);
  let total = 0;
  for (let index = 0; index < lesson.length; index += 1) {
    const propertyLesson = Object.entries(object[lesson[index]]);
    const numberStudents = propertyLesson[1];
    total += numberStudents[1];
  }
  return `O total de estudantes é: ${total}`;
}

console.log(totalStudents(allLessons));

//  Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 
const getValueByNumber = (object, index) => {
  const lesson = Object.keys(object);
  const value = object[lesson[index]];
  console.log(value);
}

getValueByNumber(lesson1, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => (object[key] === value);

console.log(verifyPair(lesson3, 'turno', 'manhã'));