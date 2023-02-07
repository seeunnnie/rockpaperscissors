let computerScore = 0;
let playerScore = 0;
let result = "";
const choice = ["rock", "paper", "scissors"]
let buttonPressed;
let finalResult = "";

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
buttonPressed = 'rock';
playRound();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
buttonPressed = 'paper';
playRound();
});

const scissorsBtn = document.querySelector('#scissor');
scissorsBtn.addEventListener('click', () => {
buttonPressed = 'scissor';
playRound();
});


//function to get computer's choice
function getComputerChoice() {
    return choice[Math.floor(Math.random()*3)];
}

//function to play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = buttonPressed;
    computerSelection = getComputerChoice(choice);
    if (playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'scissor' && computerSelection == 'rock' ||
    playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        result = (`You lose! ${playerSelection} beats ${computerSelection}.<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'scissor' && computerSelection == 'paper' ||
    playerSelection == 'paper && computerSelection == rock') {
        playerScore++;
        result = (`You win! ${playerSelection} beats ${computerSelection}.<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
    } else if (playerSelection == computerSelection) {
        result = (`It\'s a tie! You both chose ${playerSelection}.<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);
    }
document.getElementById("result").innerHTML = result;
return;
}

//fix this!!
function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
    finalResult = "You Won!"
    document.getElementById("finalResult").innerHTML = finalResult;
    } 
    if (computerScore > playerScore) {
        finalResult = "You Lost!"
        document.getElementById("finalResult").innerHTML = finalResult;
    }
}




/*function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("type rock, paper, or scissor");
        let computerSelection = getComputerChoice(choice);
        
    }
    if (computerScore > playerScore) {
        console.log("You lost! Computer won!");
    } else if (playerScore > computerScore) {
        console.log("You won! Computer lost");
    } else {
        console.log("You tied!");
    }
}
game();
*/