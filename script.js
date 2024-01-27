let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    document.getElementById('playerChoiceImage').src = `images/${playerChoice}.png`;
    document.getElementById('computerChoiceImage').src = `images/${computerChoice}.png`;
    if (playerChoice === computerChoice) {
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
    } else {
        computerScore++;
    }

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    if (playerScore === 5) {
        alert('Congratulations! You won');
        resetGame();
    } else if (computerScore === 5) {
        alert('Damn, The AI is taking over!');
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerChoiceImage').src = `images/question.png`;
    document.getElementById('computerChoiceImage').src = `images/question.png`;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}