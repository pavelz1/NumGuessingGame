'use strict'

//Рекомендованая функция, которая проверяет ввод числа
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
};

//Функция проверяет угадал или нет
let NumGuessingGame = function () {
	// Math.random генерирует случайные числа от 1 до 100
	let randomNumber = Math.floor((Math.random() * 100) + 1); // от Math.floor получаем 99 + 1 компенсация округления в нижнюю сторону = 100
	console.log(randomNumber);
	let getNumber = function () {
		//Функция проверяет, продолжаем игру
		let getAsk = function (check) {
			if (check) {
				getNumber();
			} else {
				alert('Спасибо, за игру');
			}
		}

		let riddle,
			enteredNumber = prompt('Поиграем? Введите число от 1 до 100!');
		// При нажатии отмена
		if (enteredNumber === null) {
			alert('Игра закончена');
		}
		// Проверяем если не число или число с плавающей точкой, число не больше 100
		else if (!isNumber(enteredNumber) || (parseFloat(enteredNumber) > 100)) {
			riddle = confirm('Введите число от 1 до 100!');
			getAsk(riddle);
		}
		else if (enteredNumber == randomNumber) {
			alert('Вы выйграли!');
		}
		else if (enteredNumber > randomNumber) {
			riddle = confirm('Загаданное число меньше');
			getAsk(riddle);
		}
		else if (enteredNumber < randomNumber) {
			riddle = confirm('Загаданное число больше');
			getAsk(riddle);
		}
	}
	console.dir(getNumber); // Замыкания Closure (NumGuessingGame)
	return getNumber();
}

NumGuessingGame();