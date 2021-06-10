const brazilStates = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  ES: "Espírito Santo",
  DF: "Distrito Federal",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

for (let key in brazilStates) {
  const statesDropdown = document.getElementById('states');
  const stateOption = document.createElement('option');
  stateOption.value = key;
  stateOption.innerHTML = brazilStates[key];
  statesDropdown.appendChild(stateOption);
}

function checkEmail() {
  const email = document.querySelector('#email');
  let emailInput = email.value;
  const formatEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(emailInput);
  if (!formatEmail && emailInput.length) {
    email.value = '';
    alert('Email inválido');
    return false
  }
  return formatEmail;
}

const name = document.getElementById('full-name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const states = document.getElementById('states');
const resumeCurriculum = document.getElementById('resume');
const office = document.getElementById('office');
const descriptionOffice = document.getElementById('resume-office');
const initialDate = document.getElementById('date');

const formsElements = [name, email, cpf, address, city, states, resumeCurriculum, office, descriptionOffice, initialDate];
const results = document.querySelector('.curriculum-content');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (let key in formsElements) {
    if (checkEmail() && verifyDate()) {
      const result = document.createElement('div');
      result.innerHTML = formsElements[key].value;
      results.appendChild(result);
    }
  }
});

resetButton.addEventListener('click', () => {
  document.getElementById('my-form').reset();
  const curriculum = document.querySelectorAll('.curriculum-content');

  for (let index = 0; index < curriculum.length; index += 1) {
    curriculum[index].innerHTML = '';
  }
});

function verifyDate() {
  const inputDate = document.getElementById('date');
  if (inputDate.value.length === 0) {
    return alert('A data não foi preenchida!');
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/; // regex do gabarito;
  
  if (!regex.test(inputDate.value)) {
    return alert('Data: Formato inválido!');
  }

  let splitted = inputDate.value.split('/');
  let day = splitted[0]; 
  let month = splitted[1];
  let year = splitted[2];
    
  if (day < 0 && day > 31) {
    return alert('Dia inválido!');
  }
  if (month < 0 && month > 12) {
    return alert('Mês inválido!');
  }
  if (year < 0) {
    return alert('Ano inválido!');
  }
  return true;
}



