// Computer Choice

let computerChoice;

function getComputerChoice() {
  let rndInt = Math.floor(Math.random() * 3) + 1;
  if (rndInt == 1) {
    computerChoice = "ROCK";
    choiceComputer.textContent = "COMPUTER CHOOSE ROCK";
  } else if (rndInt == 2) {
    computerChoice = "PAPER";
    choiceComputer.textContent = "COMPUTER CHOOSE PAPER";
  } else {
    computerChoice = "SCISSORS";
    choiceComputer.textContent = "COMPUTER CHOOSE SCISSORS";
  }

  return computerChoice;
}

// Human Choice

// Button Selection

const choiceHuman = document.querySelector(".game-human-choice");
const choiceComputer = document.querySelector(".game-computer-choice");
const output = document.querySelector(".output-para");
const scoreHuman = document.querySelector(".game-human-score");
const scoreComputer = document.querySelector(".game-computer-score");
const currentRound = document.querySelector(".header-rounds");
const restartGame = document.querySelector(".header-restart");
const allButtons = document.querySelectorAll("button");

//
// console.log(
//   document.addEventListener("click", function (e) {
//     console.log(e.target);
//   })
// );

let humanChoice;
const rock = document.querySelector(".game-human-buttons-rock");

const paper = document.querySelector(".game-human-buttons-paper");
const scissors = document.querySelector(".game-human-buttons-scissors");

rock.addEventListener("click", () => {
  humanChoice = "ROCK";
  choiceHuman.textContent = "YOU CHOOSE ROCK!";

  getComputerChoice();
  playRound(humanChoice, computerChoice);
  return humanChoice;
});

paper.addEventListener("click", () => {
  humanChoice = "PAPER";
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  choiceHuman.textContent = "YOU CHOOSE PAPER!";
});

scissors.addEventListener("click", () => {
  humanChoice = "SCISSORS";
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  choiceHuman.textContent = "YOU CHOOSE SCISSORS";
});

restartGame.addEventListener("click", () => document.location.reload());

// Score

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Round

function playRound(human, computer) {
  rounds++;
  if (human == computer) {
    output.textContent = `IT'S A DRAW`;
  } else if (
    (human == "ROCK" && computer == "PAPER") ||
    (human == "PAPER" && computer == "SCISSORS") ||
    (human == "SCISSORS" && computer == "ROCK")
  ) {
    output.textContent = `You lose! ${computer} beats ${human}`;
    computerScore++;
  } else {
    output.textContent = `You win! ${humanChoice} beats ${computer}`;
    humanScore++;
  }

  scoreComputer.textContent = `COMPUTER : ${computerScore}`;
  scoreHuman.textContent = `YOU : ${humanScore}`;
  currentRound.textContent = `ROUND : ${rounds}`;

  if (humanScore == 5 || computerScore == 5) {
    let gameResult =
      humanScore > computerScore
        ? "YAY! YOU WON THE GAME!"
        : "SORRY! YOU LOST!";
    output.textContent = gameResult;
    allButtons.forEach((button) => (button.disabled = true));
    restartGame.disabled = false;
  }
}

function displayhumanInput(input) {
  const humanInput = document.querySelector(".game-human-choice");
  humanInput.textContent = `YOU CHOOSE ${input}`;
}

// playGame function

// function playGame() {
//   for (i = 1; i <= 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }

//   if (humanScore > computerScore) {
//     console.log(`Finish! You are the winner of the game:-
//                  You: ${humanScore}  Computer: ${computerScore}`);
//   } else if (humanScore == computerScore) {
//     console.log(`It's a draw!
//                    You: ${humanScore} Computer: ${computerScore}`);
//   } else {
//     console.log(`Finish! You lost the game:-
//                  You: ${humanScore} Computer: ${computerScore}`);
//   }
// }

// playGame();
