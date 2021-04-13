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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const fridays = [4, 11, 18, 25];
const holidays = [24, 25, 31];

function createDays() {
for (let day of dezDaysList) {
    calendarDay = document.createElement('li')

    calendarDay.innerText = day
    calendarDay.className = 'day'

    if (fridays.includes(day)) {
        calendarDay.className += ' friday'
    } else if (holidays.includes(day)) {
        calendarDay.className += ' holiday'
    }

    document.querySelector('#days').appendChild(calendarDay)
}
}
createDays();

function createButton(string) {
button = document.createElement('button')
button.id = "btn-holiday"
button.innerText = string

document.querySelector('.buttons-container').appendChild(button)
}
createButton("Feriados")

