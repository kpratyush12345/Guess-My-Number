'use strict';

/*DOM MANIPULATION
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🔥 Correct Number!'; // to change the text content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // to give value to the input
console.log(document.querySelector('.guess').value);
*/

/*
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value); //when we enter value in guess field then click on check the event listener function will trigger and console.log the value now we can use this value
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess); //This will be passed to guess variable as string , we need to change it to Number
});
*/

// let secretnum = Math.trunc(Math.random() * 20) + 1; // Truncated the random number between 1 to 20
// // document.querySelector('.number').textContent = secretnum;

// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   //   console.log(guess, typeof guess);

//   //When no input is given
//   if (!guess) {
//     document.querySelector('.message').textContent = '🚫 No Number';
//   } else if (guess === secretnum) {
//     //When player wins
//     document.querySelector('.message').textContent = '🔥 Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretnum;

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess > secretnum) {
//     //when guess is too high
//     if (score > 1) {
//       document.querySelector('.message').textContent = '🙋 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💀 Game Over';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretnum) {
//     //when guess is too low
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😞 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💀 Game Over';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretnum = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start Guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });

//Refactoring Code
let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } else if (guess === secretnum) {
    document.querySelector('.message').textContent = '🔥 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnum;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //  guess > secretnum ? '🙋 Too High!' : '😞 Too Low!'; //we can also put it into a function and then just call it
      displaymessage(guess > secretnum ? '🙋 Too High!' : '😞 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
