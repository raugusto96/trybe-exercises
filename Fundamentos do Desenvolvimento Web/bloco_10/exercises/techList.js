// Original
function techList(techs, name) {
  let newTechList = techs.sort();
  let techList2 = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < newTechList.length; index += 1) {
    techList2[index] = {
      tech: techs[index],
      name,
    };
  }
  return techList2;
}

// Refatorada

const techList1 = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  return array.sort().map((tech) => ({ tech, name }));
};

module.exports = techList1;