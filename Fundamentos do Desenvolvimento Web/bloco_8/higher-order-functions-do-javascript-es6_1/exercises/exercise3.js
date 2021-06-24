const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (template, answers, action) => {
  let counterAnswers = 0;
  for (let index = 0; index < template.length; index += 1) {
    const act = action(template[index], answers[index])
    counterAnswers += act;
  }
  return `Total de respostas corretas: ${counterAnswers}`;
}

console.log(compareAnswers(rightAnswers, studentAnswers, (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  } return -0.5;
}));