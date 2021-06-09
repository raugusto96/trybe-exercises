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

// const inputDate = document.getElementById('date');

// inputDate.addEventListener('input', () => {
//   const startDate = document.getElementById('date').value;
//   let day = Number(startDate[0] + startDate[1]); 
//   let month = Number(startDate[3] + startDate[4]);
//   let year = Number(startDate[6] + startDate[7] + startDate[8] + startDate[9]);
    
//   if (day > 0) {
//     console.log('Funciona');
//   } 
//   else {
//     alert('O dia é inválido');
//   }
  // if (month > 0 && month <= 12) {
  //   alert('O mês é inválido');
  // }
  // if (year > 0) {
  //   alert('O ano é inválido');
  // }
// });



