const button = document.getElementById('button');
let clickCount = 0;
button.addEventListener('click', () => {
  clickCount += 1;
  const clicked = document.getElementById('click-button');
  clicked.innerHTML = clickCount;
});