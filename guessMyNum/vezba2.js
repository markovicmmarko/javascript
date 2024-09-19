'use strict';

let number = Math.round(Math.random() * 20);
let current_score = 20;
let highscore = 0;

// PLAY LOGIC
document.querySelector('.btn.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = current_score;

  // checks if there is a number entered
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number...';
  }
  // there is a number entered
  else {
    if (current_score > 0) {
      if (guess !== number) {
        document.querySelector('.message').textContent =
          guess > number ? 'Too high!' : 'Too low!';
        current_score--;
      } else {
        document.querySelector('.message').textContent =
          'Great! You got it correct!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#09D073';
        document.querySelector('.number').style.width = '30rem';
        if (highscore < current_score) {
          highscore = current_score;
        }
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent =
        'Game over kid... You lost!';
    }
  }
});

// PLAY AGAIN LOGIC
document.querySelector('.btn.again').addEventListener('click', function () {
  number = Math.round(Math.random() * 20);
  current_score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = current_score;
  document.querySelector('body').style.backgroundColor = '#222';
});
