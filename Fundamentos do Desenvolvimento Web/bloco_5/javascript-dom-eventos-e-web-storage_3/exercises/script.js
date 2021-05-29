function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.

// Exercício 1
function createNumberDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day';
    dayListItem.innerHTML = days;

    if (days === 24 || days === 31) {
      dayListItem.className = 'day holiday';
    }
    if (days === 4 || days === 11 || days === 18) {
      dayListItem.className = 'day friday'
    }
    if (days === 25) {
      dayListItem.className = 'day friday holiday';
    }

    monthDaysList.appendChild(dayListItem);
  }
}
createNumberDays();

// Exercício 2
function createHolidayButton(holiday) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerHTML = holiday;
  buttonsContainer.appendChild(buttonHoliday);
}
createHolidayButton('Feriados');

// Exercício 3
function holiday() {
  const buttonHoliday = document.querySelector('#btn-holiday');
  const holidayDays = document.querySelectorAll('.holiday');
  buttonHoliday.addEventListener('click', function() {
    const color = 'rgb(238,238,238)'
    const newColor = 'rgb(59, 48, 41)'
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === newColor) {
        holidayDays[index].style.backgroundColor = color;
      } else {
        holidayDays[index].style.backgroundColor = newColor;
      }
    }
  });
}
holiday();

// Exercício 4
function createFridayButton(friday) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = friday;
  buttonsContainer.appendChild(buttonFriday);
}

createFridayButton('Sexta-feira');

// Exercício 5
function friday() {
  const buttonFriday = document.querySelector('#btn-friday');
  const fridayDays = document.querySelectorAll('.friday');
  const sextou = 'SEXXXXXXTOU'
  const text = catchFridayDays();  
  buttonFriday.addEventListener('click', function() {
    for (let index = 0; index < fridayDays.length; index += 1) {
      if (fridayDays[index].innerText === sextou) {
        fridayDays[index].innerHTML = text[index];
        fridayDays[index].style.color = '#777';
      } else {
        fridayDays[index].innerHTML = sextou;
        fridayDays[index].style.color = 'rgb(178, 34, 52)';
      }
    }
  });
}

friday();

function catchFridayDays() {
  const fridayDays = document.querySelectorAll('.friday');
  let fridays = [];
  for (let index = 0; index < fridayDays.length; index += 1) {
    fridays.push(fridayDays[index].innerText);
  }
  return fridays;
}

catchFridayDays();

// Exercício 6
function toApllyZoom() {
  const days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
  });
}

function toRemoveZoom() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
}

toApllyZoom();
toRemoveZoom();

// Exercício 7
function createTask(task) {
  const myTasks = document.querySelector('.my-tasks');
  const tasks = document.createElement('span');
  tasks.innerHTML = task;
  myTasks.appendChild(tasks);
}

createTask('Estudar');

// Exercício 8
function createLegend(color) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('div');
  task.className = 'task';
  task.style.backgroundColor = color;
  myTasks.appendChild(task);
}

createLegend('rgb(91, 141, 51)');