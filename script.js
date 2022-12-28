'use strict';

let secretNumber = generateSecret();
let score = 20;
let highScore = 0;

const inputElement = document.querySelector('input');
const scoreElement = document.querySelector('.score');
const secretElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const highScoreElement = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', reset);

function checkNumber() {
  if (score < 1) return;

  const enteredNumber = Number(inputElement.value);

  if (!isAcceptedNumber(enteredNumber)) {
    messageElement.textContent = '⛔ أدخل رقم بين 1 و 20';
    return;
  }

  if (enteredNumber === secretNumber) {
    messageElement.textContent = '👍 أحسنــــت';
    document.body.style.backgroundColor = '#60b347';
    secretElement.textContent = secretNumber;
    secretElement.style.width = '30rem';
    if (score > highScore) {
      highScoreElement.textContent = highScore = score;
    }
  } else {
    messageElement.textContent =
      enteredNumber > secretNumber
        ? '📈 أعلى من الرقم السري'
        : '📉 أقل من الرقم السري';
    score--;
  }

  if (score < 1) {
    messageElement.textContent = '💥 لقد خسرت';
    secretElement.textContent = secretNumber;
    document.body.style.backgroundColor = '#ef6047';
  }

  scoreElement.textContent = score;
}

function isAcceptedNumber(value) {
  return value && value > 0 && value <= 20;
}

function reset() {
  score = 20;
  scoreElement.textContent = score;
  messageElement.textContent = 'ابدأ التخمين';
  inputElement.value = '';
  secretNumber = generateSecret();
  document.body.style.backgroundColor = '#222';
  secretElement.style.width = '15rem';
  secretElement.textContent = '?';
}

function generateSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}
