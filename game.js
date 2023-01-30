//function to get computer's choice
const choice = ["rock", "paper", "scissors"]

function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
}
//end of function

let computerScore = 0;
let playerScore = 0;

//function to play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You Lose! Paper beat Rock";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You win! Rock beat Scissors";
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'paper') {
        playerScore++;
        return "You win! Scissor beat Paper";
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'rock') {
        computerScore++;
        return "You Lose! Rock beat Scissors";
    } else if (playerSelection.toLowerCase() == 'paper && computerSelection == rock') {
        playerScore++;
        return "You win! Paper beat Rock";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You Lose! Scissors beat Paper";
    } else {
        return "It's a tie!"
    }
}

function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("type rock, paper, or scissor");
        let computerSelection = getComputerChoice(choice);
        console.log(playRound(playerSelection, computerSelection));
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