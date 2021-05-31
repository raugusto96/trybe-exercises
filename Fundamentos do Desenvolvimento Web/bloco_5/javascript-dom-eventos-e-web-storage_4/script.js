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

// Estilo da Fonte

// Espessura da linha