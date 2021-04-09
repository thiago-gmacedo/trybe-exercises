// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText(newText) {
	document.getElementsByTagName('p')[0].innerText = newText
}   
changeText('quero ser muito rico')

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColor(newColor) {
	document.querySelector('.main-content').style.backgroundColor = newColor
}
changeColor('rgb(76,164,109)')

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColor2(newColor) {
	document.querySelector('.center-content').style.backgroundColor = newColor
}
changeColor2('white')

// 4. Crie uma função que corrija o texto da tag <h1>.
function correctText(newText) {
	document.querySelector('h1').innerText = newText
}
correctText('Exercício 5.1 - JavaScript')

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showTagP() {
	let list = document.querySelectorAll('p');
	for (let index = 0; index < 4; index ++) {
		console.log(list[index].innerText)
	}
}
showTagP()

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCase() {
	let list = document.querySelectorAll('p');
	for (let index = 0; index < 4; index += 1) {
		list[index].innerText = list[index].innerText.toUpperCase();
	}
}
upperCase()
