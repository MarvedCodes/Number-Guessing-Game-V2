'use strict';

/* 
// selecting html elements
console.log(document.querySelector('.message').textContent);
//manipulating
document.querySelector('.message').textContent = 'Correct Number!🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// manipulating
document.querySelector('.guess').value = 23;
//selecting input fields
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.guess').disabled = true;
document.querySelector('.check').disabled = true;
document.querySelector('.easy').disabled = true;
document.querySelector('.medium').disabled = true;
document.querySelector('.hard').disabled = true;
document.querySelector('.extreme').disabled = true;
document.querySelector('.guess').style.display = 'none';
document.querySelector('.check').style.display = 'none';
document.querySelector('.easy').style.display = 'none';
document.querySelector('.medium').style.display = 'none';
document.querySelector('.hard').style.display = 'none';
document.querySelector('.extreme').style.display = 'none';
document.querySelector('.message').textContent = 'Click Play ...';
// check input button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🛑 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('h1').textContent = 'Congrats🎉 Wohooo';
    displayMessage('Want some more? Click Again ✅');
    displayNumber(secretNumber);
    changeBackground('#60b347');
    changeWidth('30rem');
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.easy').disabled = true;
    document.querySelector('.medium').disabled = true;
    document.querySelector('.hard').disabled = true;
    document.querySelector('.extreme').disabled = true;

    // highscore
    // FIXME: first score was log to easy, next to medium
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      document.querySelector('h1').textContent = '😭 You lost the game.';
      displayMessage('Maybe next time? Try again ✅');
      displayScore(0);
      displayNumber(secretNumber);
      changeWidth('30rem');
    }
  }
});

// again
document.querySelector('.again').addEventListener('click', function () {
  displayNumber('?');
  changeWidth('15rem');
  displayMessage('Choosing a difficulty...');
  changeBackground('#222');
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').textContent = 'Please Choose A Difficulty';
  document.querySelector('h1').textContent = 'Difficulty?...';
  document.querySelector('.easy').disabled = false;
  document.querySelector('.medium').disabled = false;
  document.querySelector('.hard').disabled = false;
  document.querySelector('.extreme').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.easy').style.display = 'block';
  document.querySelector('.medium').style.display = 'block';
  document.querySelector('.hard').style.display = 'block';
  document.querySelector('.extreme').style.display = 'block';
  document.querySelector('.again').textContent = 'Play Again';
  document.querySelector('.easy').style.top = '2rem';
  document.querySelector('.medium').style.top = '9rem';
  document.querySelector('.hard').style.top = '16rem';
  document.querySelector('.extreme').style.top = '23rem';
});

// easy button
document.querySelector('.easy').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start guessing...');
  changeBackground('#344e41');
  displayScore(score);
  document.querySelector('h1').textContent = 'Easy Round';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.easy').style.top = '2rem';
  document.querySelector('.medium').style.display = 'none';
  document.querySelector('.hard').style.display = 'none';
  document.querySelector('.extreme').style.display = 'none';
});

// medium button
document.querySelector('.medium').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start guessing...');
  changeBackground('#023e8a');
  displayScore(score);
  document.querySelector('h1').textContent = 'Medium Round';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.easy').style.display = 'none';
  document.querySelector('.medium').style.top = '2rem';
  document.querySelector('.hard').style.display = 'none';
  document.querySelector('.extreme').style.display = 'none';
});

// hard button
document.querySelector('.hard').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start guessing...');
  changeBackground('#ca5902');
  displayScore(score);
  document.querySelector('h1').textContent = 'Hard Round';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.easy').style.display = 'none';
  document.querySelector('.medium').style.display = 'none';
  document.querySelector('.hard').style.top = '2rem';
  document.querySelector('.extreme').style.display = 'none';
});

// extreme button
document.querySelector('.extreme').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start guessing...');
  changeBackground('#9d0208');
  displayScore(score);
  document.querySelector('h1').textContent = 'Extreme Round';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.easy').style.display = 'none';
  document.querySelector('.medium').style.display = 'none';
  document.querySelector('.hard').style.display = 'none';
  document.querySelector('.extreme').style.top = '2rem';
});

// TODO: STARTING PAGE SHOULD HAVE DIFFICULTY OPTIONS CHOSEN FIRST!!!
