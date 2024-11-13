// Генерируем случайное число
const randomNumber = Math.floor(Math.random() *100)+1;

//находим элементы

const numberInput = document.getElementById("numberInput");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clearButton");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const guessedNumber = document.getElementById("guessedNumber");
const newGameButton = document.getElementById('newGo');

// Инициализация переменных
let currentNumber = ""; //текущий номер
let attemptCount = 0; //количество попыток


// Функция обработки нажатия на числовые кнопки
function handleButtonClick(event) {
    currentNumber += event.target.dataset.value;
    numberInput.textContent = currentNumber;
    buttonValue = event.target.dataset.value;

    // Проверяем, не превышает ли введенное число 100
    if (parseInt(currentNumber) > 100) {
        message.textContent = "Число не должно превышать 100!"; 
        message.style.color='#f08080';
        return; 
       }

  }
// Привязываем обработчик к каждой кнопке
for (let i=0; i<numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', handleButtonClick )
    }
// кнопка очистить 


function clearBtn() {
    currentNumber = "";
    numberInput.textContent = "";
    message.textContent= " ";
}

clearButton.addEventListener("click",clearBtn  )

//проверка совпадает ли введенное число с рандомным

function checkGuess () {
    if (currentNumber === "") {
        message.textContent = "Введите число!";
        message.style.color = '#d77878';
        return;
    }
    
    attemptCount++;
    attempts.textContent = `Попыток: ${attemptCount}`;

    const guessedNumberValue = parseInt(currentNumber);
    guessedNumber.textContent = `Вы ввели: ${guessedNumberValue}`;

    if (guessedNumberValue === randomNumber) {
        message.textContent = "Поздравляем, вы угадали!🥳";
        message.style.color = 'green'
        checkButton.disabled = true;
        clearButton.disabled = true;
        newGameButton.classList.remove('none');


    } else if (guessedNumberValue < randomNumber) {
        message.textContent = "Слишком мало! 😁";
        message.style.color = '#dec060';

    } else {
        message.textContent = "Слишком много!😅";
        message.style.color = '#d77878';
    }

    currentNumber = "";
    numberInput.textContent = "";
    }

    // Обработка нажатия на кнопку "Проверить" (вызываем функцию checkGuess)
checkButton.addEventListener("click", checkGuess); 


// Функция для начала новой игры
function startNewGame() {
    // randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем новое число
    console.log(randomNumber);
    attemptCount = 0; // Сбрасываем счетчик попыток
    attempts.textContent = `Попыток: ${attemptCount}`; // Обновляем текст с количеством попыток
    currentNumber = ""; // Очищаем введенное число
    numberInput.textContent = ""; // Очищаем поле ввода
    message.textContent = " "; // Очищаем сообщение
    checkButton.disabled = false; // Включаем кнопку "Проверить"
    clearButton.disabled = false; // Включаем кнопку "Очистить"
    newGameButton.classList.add('none');
    guessedNumber.textContent= '';

}


newGameButton.addEventListener('click', startNewGame)










