'use strict';

// Game logic - generate random number(1-20) for user to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
};

//Click event listener
document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess, typeof guess);

	// when there is no guess input
	if (!guess) {
		displayMessage('⛔️ No number!');

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('🎊 Correct Number!');
		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		// displaying highscore
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		//When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('You lost the game! 💥');
			document.querySelector('.score').textContent = 0;
		}
	}
});

// Implentation of game reset functionality
document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';

	document.querySelector('.number').style.width = '15rem';
});
