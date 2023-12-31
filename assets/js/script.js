// Selecting DOM elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultTextEl = document.getElementById('result-message');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const buttons = document.querySelectorAll('#choices button'); // All the game choice buttons

// Default game condition
let playerScore = 0;
let computerScore = 0;

// Function generating and storing the computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function determining the winner of the game
function determineWinner(playerChoice, computerChoice) { // Modified to accept computerChoice
  if (playerChoice === computerChoice) {
    return 'It\'s a draw!';
  }

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

// Function to update the score display
function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

// Function to set the image based on the user's choice
function setChoiceImage(choice, playerOrComputer) {
    const imageElement = playerOrComputer === 'player' ? playerImage : computerImage; // use the already selected elements
    imageElement.src = 'assets/images/' + choice.charAt(0).toUpperCase() + choice.slice(1) + '.png'; // dynamically chose corresponding button image
  }
  
  // Main function to handle button clicks and game logic
  function handlePlayerChoice(choice) {
    const computerChoice = getComputerChoice(); // Determine the computer's choice
  
    // Update images based on current choices
    setChoiceImage(choice, 'player');
    setChoiceImage(computerChoice, 'computer');
  
    // Determine the winner and update the score
    const resultMessage = determineWinner(choice, computerChoice);
    updateScore();
  
    // Display the result message
    resultTextEl.textContent = resultMessage + ` You chose ${choice}, Computer chose ${computerChoice}.`;
  }
  
  // Setting up the event listeners for each button
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const playerChoice = this.getAttribute('data-choice'); // Get the choice from the button
      handlePlayerChoice(playerChoice);
    });
  });
