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
  // declare a variable to store the result
  let result;

  // compare humanChoice with computerChoice by its cases
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "scissors":
          // if the player wins, log the winning statement
          console.log("You win! Rock beats scissors");
          // store "win" in the "result" variable
          result = "win";
          break;
        case "paper":
          // if computer wins, log the losing statement
          console.log("You lose! Paper beats rock.");
          // store "lose" in the "result" variable
          result = "lose";
          break;
        case "rock":
          // if draws, log the draw statement
          console.log("Draw!");
          // store "draw" in the "result" variable
          result = "draw";
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats rock");
          result = "win";
          break;
        case "scissors":
          console.log("You lose! Scissors beats paper.");
          result = "lose";
          break;
        case "paper":
          console.log("Draw!");
          result = "draw";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "paper":
          console.log("You win! Scissors beats paper");
          result = "win";
          break;
        case "rock":
          console.log("You lose! Rock beats paper.");
          result = "lose";
          break;
        case "scissors":
          console.log("Draw!");
          result = "draw";
          break;
      }
      break;
  }

  return result;
}

function playGame() {
  // declare variables for scores
  let humanScore = 0;
  let computerScore = 0;

  // repeat the round 5 times
  for (let i = 0; i < 5; i++) {
    // at each round, get new choices
    // convert the player input to lower case so that it takes inputs case-insensitively
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();
    switch (playRound(humanChoice, computerChoice)) {
      // if the return value equals "win", increment humanScore by 1
      case "win":
        humanScore++;
        break;
      // if the return value equals "lose", increment computerScore by 1
      case "lose":
        computerScore++;
        break;
      // do nothing otherwise
      default:
        break;
    }
  }

  console.log("Final result: \n");
  // if humanScore is greater than computerScore, log final winning statement
  // along with the score history
  if (humanScore > computerScore) {
    console.log("You win! :D");
    console.log(`final result:
    your score: ${humanScore}
    computer score: ${computerScore}`);
    // if computerScore is greater than humanScore, log final lose statement
  } else if (computerScore > humanScore) {
    console.log("You lose... :\\");
    console.log(`final result:
    your score: ${humanScore}
    computer score: ${computerScore}`);
  } else {
    // log draw statement otherwise
    console.log("It's a tie :b");
    console.log(`final result:
    your score: ${humanScore}
    computer score: ${computerScore}`);
  }
}

playGame();
