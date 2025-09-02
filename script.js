function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  // return "rock" if choice equals 0
  // return "paper" if choice equals 1
  // return "scissors" if choice equals 2
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
  let result = [];

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "scissors":
          result.push("You win! Rock beats scissors");
          result.push("win");
          break;
        case "paper":
          result.push("You lose! Paper beats rock.");
          result.push("lose");
          break;
        case "rock":
          result.push("Draw!");
          result.push("draw");
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          result.push("You win! Paper beats rock");
          result.push("win");
          break;
        case "scissors":
          result.push("You lose! Scissors beats paper.");
          result.push("lose");
          break;
        case "paper":
          result.push("Draw!");
          result.push("draw");
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "paper":
          result.push("You win! Scissors beats paper");
          result.push("win");
          break;
        case "rock":
          result.push("You lose! Rock beats paper.");
          result.push("lose");
          break;
        case "scissors":
          result.push("Draw!");
          result.push("draw");
          break;
      }
      break;
  }

  return result;
}

function playGame(roundResult) {
  switch (roundResult) {
    case "win":
      humanScore++;
      break;
    case "lose":
      computerScore++;
      break;
    default:
      break;
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const clear = document.querySelector("#clear");

const buttons = document.querySelectorAll(".choice");
const buttonDiv = document.querySelector(".button-div");
buttonDiv.style.textAlign = "center";

const result = document.querySelector(".result");
result.setAttribute(
  "style",
  "padding : 20px 400px; display : flex; justify-content: space-between;"
);

const statement = document.querySelector(".statement");
statement.setAttribute("style", "flex-basis: 400px");
const score = document.querySelector(".score");
score.setAttribute("style", "flex-basis: 400px");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    const roundResult = document.createElement("div");
    roundResult.textContent = playRound(humanChoice, computerChoice).at(0);
    statement.appendChild(roundResult);

    const runningScore = document.createElement("div");

    playGame(playRound(humanChoice, computerChoice).at(1));

    if (humanScore < 5 && computerScore < 5) {
      runningScore.textContent = `Current score >>> Your score ${humanScore} : Computer score ${computerScore}`;
    } else if (humanScore == 5) {
      runningScore.setAttribute("style", "font-weight: bold");
      runningScore.textContent = `You Win!! >>> Your score ${humanScore} : Computer score ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
    } else {
      runningScore.setAttribute("style", "font-weight: bold");
      runningScore.textContent = `Computer Win!! >>> Your score ${humanScore} : Computer score ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
    }

    score.appendChild(runningScore);
  });

  reset.addEventListener("click", () => {
    const statements = document.querySelectorAll(".statement div");
    statements.forEach((roundResult) => roundResult.remove());
    const scores = document.querySelectorAll(".score div");
    scores.forEach((runningResult) => runningResult.remove());
  });
});
