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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 		29, 30, 31];

const fridays = [4, 11, 18, 25];
const holidays = [24, 25, 31];

function createDays() {
	for (let day of dezDaysList) {
		calendarDay = document.createElement('li')

		calendarDay.innerText = day;
		calendarDay.className = 'day';

		if (fridays.includes(day)) {
			calendarDay.className += ' friday';
		}
		if (holidays.includes(day)) {
			calendarDay.className += ' holiday';
		}
		document.querySelector('#days').appendChild(calendarDay)
	}
}
createDays();

function createButton(string, buttonID) {
let button = document.createElement('button');
button.id = buttonID;
button.innerText = string;

document.querySelector('.buttons-container').appendChild(button);
}
createButton("Feriados", "btn-holiday");
createButton('Sexta-Feira', "btn-friday");

function showHolidays() {
	let holidayButton = document.querySelector('#btn-holiday');
	let holidayList = document.querySelectorAll('.holiday');

	holidayButton.addEventListener('click', function() {
		if (holidayList[0].style.backgroundColor === 'bisque') {
			for (let day of holidayList) {
				day.style.backgroundColor = 'rgb(238,238,238)';
			};
		} else {
			for (let day of holidayList) {
				day.style.backgroundColor = 'bisque';
			};
		}; 
	});
};
showHolidays();


function showFridays() {
	let fridayButton = document.querySelector('#btn-friday');
	let fridayList = document.querySelectorAll('.friday');
	let newText = 'AEOOOOO !!';

	fridayButton.addEventListener('click', function() {
		if (fridayList[0].innerText === newText) {
			for (let index = 0; index < fridayList.length; index ++) {
				fridayList[index].innerText = fridays[index];
			};
		} else {
			for (let index = 0; index < fridayList.length; index ++) {
				fridayList[index].innerText = newText;
			};
		};
	});
};
showFridays();

function zoomIn() {
	let days = document.querySelector('#days');
	
	days.addEventListener('mouseover', function(event) {
		event.target.style.fontSize = '50px';
	});
};

function zoomout() {
	let days = document.querySelector('#days');
	
	days.addEventListener('mouseout', function(event) {
		event.target.style.fontSize = '20px';
	});
};

zoomIn();
zoomout();

function newTask(taskName) {
	let task = document.createElement('span');
	task.innerText = taskName;

	document.querySelector('.my-tasks').appendChild(task)
};
newTask('teste');

function taskColorSubtitle(color) {
	let subtitle = document.createElement('div')
	subtitle.className = 'task'
	subtitle.style.backgroundColor = color

	document.querySelector('.my-tasks').appendChild(subtitle)
}
taskColorSubtitle('blue')

function selectTask() {
	let selectedTask = document.getElementsByClassName('task selected');
	let myTasks = document.querySelector('.task')

	myTasks.addEventListener('click', function(event) {
		if (selectedTask.length === 0) {
			event.target.className = 'task selected';
		} else {
			event.target.className = 'task';
		}
	});
}
selectTask()

function colorDayBackground() {
	let selectedTask = document.getElementsByClassName('task selected');
	let days = document.querySelector('#days');
	let taskDiv = document.querySelector('.task');
	let taskColor = taskDiv.style.backgroundColor;

	 days.addEventListener('click', function(event) {
	 	let eventTargetColor = event.target.style.color;
		if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
			let color = selectedTask[0].style.backgroundColor;
			event.target.style.color = color;
		} else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
			event.target.style.color = 'rgb(119,119,119)';
		};
 	});
 };

colorDayBackground()