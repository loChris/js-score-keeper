const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');
const winningScoreInput = document.querySelector(`input[type='number']`);
const scoreToPlayToDisplay = document.querySelector('#scoreToPlayTo');
const p1button = document.querySelector('#p1');
const p2button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

// TODO: Refactor repeated code ***
function handleInputChange() {
	if (winningScoreInput.value != null) {
		scoreToPlayToDisplay.innerHTML = winningScoreInput.value;
		winningScore = Number(winningScoreInput.value);
		handleReset();
	}
}

function handleP1Click() {
	if (!gameOver) {
		p1Score += 1;

		if (p1Score === winningScore) {
			gameOver = true;
			p1ScoreDisplay.classList.add('winner');
		}

		p1ScoreDisplay.innerHTML = p1Score;
	}
}

function handleP2Click() {
	if (!gameOver) {
		p2Score += 1;

		if (p2Score === winningScore) {
			gameOver = true;
			p2ScoreDisplay.classList.add('winner');
		}
		p2ScoreDisplay.innerHTML = p2Score;
	}
}

function handleReset() {
	p1Score = 0;
	p1ScoreDisplay.innerHTML = p1Score;
	p1ScoreDisplay.classList.remove('winner');

	p2Score = 0;
	p2ScoreDisplay.innerHTML = p1Score;
	p2ScoreDisplay.classList.remove('winner');

	gameOver = false;
}

winningScoreInput.addEventListener('change', handleInputChange);
p1button.addEventListener('click', handleP1Click);
p2button.addEventListener('click', handleP2Click);
resetButton.addEventListener('click', handleReset);
