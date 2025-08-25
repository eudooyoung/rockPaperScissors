function getComputerChoice() {
  // get a random number between 0 - 2 and save the value in the variable "choice"
  let choice = Math.floor(Math.random() * 3);

  // return "rock" if choice equals 0
  // return "paper" if choice equals 1
  // return "scissors" if choice equals 2
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
  // get an input from a player and save it in "choice"
  let choice = prompt("Rock, Paper, Scissors!");

  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice().toLowerCase(), getComputerChoice());
