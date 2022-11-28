'use strict';
// document.querySelector('.message').textContent = '🎊 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// Game logic - generate random number(1-20) for user to guess
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

//Click event listener
document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// if else for no guess, guess is too high or too low and changes score with every wrong guess
	if (!guess) {
		document.querySelector('.message').textContent = '⛔️ No number!';
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎊 Correct Number!';
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📈 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lost the game! 💥';
			document.querySelector('.score').textContent = 0;
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📉 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lost the game! 💥';
			document.querySelector('.score').textContent = 0;
		}
	}
});
