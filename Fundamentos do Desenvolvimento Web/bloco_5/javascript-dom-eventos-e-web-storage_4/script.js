// Cor do Fundo
const backgroundColor = document.querySelector('.background-container');
const color1 = document.createElement('div');
color1.style.backgroundColor = 'green';
backgroundColor.appendChild(color1);

const color2 = document.createElement('div');
color2.style.backgroundColor = 'lightblue';
backgroundColor.appendChild(color2);

const color3 = document.createElement('div');
color3.style.backgroundColor = 'rgb(75, 75, 75)';
backgroundColor.appendChild(color3);
// Cor da fonte
const textColor = document.querySelector('.text-color-container');
const textColor1 = document.createElement('div');
textColor1.style.backgroundColor = 'white';
textColor.appendChild(textColor1);

const textColor2 = document.createElement('div');
textColor2.style.backgroundColor = 'rgb(255, 30, 35)'
textColor.appendChild(textColor2);

const textColor3 = document.createElement('div');
textColor3.style.backgroundColor = 'rgb(0, 0, 0)'
textColor.appendChild(textColor3);
// Tamanho da Fonte
const fontSizing = document.querySelector('.font-size-container');
const fontSize1 = document.createElement('div');
fontSize1.innerHTML = '20px';
fontSizing.appendChild(fontSize1);

const fontSize2 = document.createElement('div');
fontSize2.innerHTML = '25px';
fontSizing.appendChild(fontSize2);

const fontSize3 = document.createElement('div');
fontSize3.innerHTML = '30px';
fontSizing.appendChild(fontSize3);
// Estilo da Fonte
const fontStylish = document.querySelector('.font-type-container');
const fontStyle1 = document.createElement('div');
fontStyle1.innerHTML = 'Monospace';
fontStylish.appendChild(fontStyle1);

const fontStyle2 = document.createElement('div');
fontStyle2.innerHTML = 'Fantasy';
fontStyle2.style.marginLeft = '15%';
fontStylish.appendChild(fontStyle2);

const fontStyle3 = document.createElement('div');
fontStyle3.innerHTML = 'Sans-serif';
fontStyle3.style.marginLeft = '10%';
fontStylish.appendChild(fontStyle3);

// Espessura da linha
const fontSpacing = document.querySelector('.line-container');
const fontSpace1 = document.createElement('div');
fontSpace1.innerHTML = '10%';
fontSpacing.appendChild(fontSpace1);

const fontSpace2 = document.createElement('div');
fontSpace2.innerHTML = '20%';
fontSpacing.appendChild(fontSpace2);

const fontSpace3 = document.createElement('div');
fontSpace3.innerHTML = '10%';
fontSpacing.appendChild(fontSpace3);
