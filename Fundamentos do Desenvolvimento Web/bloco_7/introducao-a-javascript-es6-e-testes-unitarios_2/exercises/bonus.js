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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5. 
const studentsMath = (object) => {
  const lessons = Object.keys(object);
  let totalStudentsMath = 0;
  for (let index = 0; index < lessons.length; index += 1) {
    const propertyLesson = Object.values(object[lessons[index]]);
    if (propertyLesson[0] === 'Matemática') {
      const students = propertyLesson[1];
      totalStudentsMath += students;
    }
  }
  console.log(`O total de estudantes na aula de matemática é: ${totalStudentsMath}`);
}

studentsMath(allLessons);

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 

const createReport = (object, name) => {
  const lessons = Object.values(object);
  const report = {
    teacher: name,
    lesson: [],
    students: 0,
  }

  lessons.find((keys) => {
    if (keys.professor === name) {
      report.lesson.push(keys.materia);
      report.students += keys.numeroEstudantes;
    }
  });
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
console.log(createReport(allLessons, 'Carlos'));