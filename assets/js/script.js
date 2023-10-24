// Main game functionality script

// Getting all the necessary elements from the DOM
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.querySelector('#result > p');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Initial scores
let playerScore = 0;
let computerScore = 0;

// Event listeners for the buttons
rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    game('scissors');
});

// Game function
function game(playerChoice) {
    // Computer choice
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    // Update the DOM with the choices
    playerChoiceEl.textContent = 'Player: ' + playerChoice;
    computerChoiceEl.textContent = 'Computer: ' + computerChoice;

    // Determine the winner
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win();
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose();
            break;
        default:
            draw();
    }
}

// Update score and result text
function win() {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultText.textContent = 'You Win!';
}

function lose() {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultText.textContent = 'You Lose!';
}

function draw() {
    resultText.textContent = 'It\'s a Draw!';
}
