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

// function getHumanChoice() {
//   // let humanChoice = prompt("What are you choosing: Rock, Paper or Scissors");
//   return humanChoice;
// }

let humanChoice;

// Button Selection
const rock = document.querySelector(".game-human-buttons-rock");
const paper = document.querySelector(".game-human-buttons-paper");
const scissors = document.querySelector(".game-human-buttons-scissors");

//

const choiceHuman = document.querySelector(".game-human-choice");
const choiceComputer = document.querySelector(".game-computer-choice");
const output = document.querySelector(".output-para");
const scoreHuman = document.querySelector(".game-human-score");
const scoreComputer = document.querySelector(".game-computer-score");
const currentRound = document.querySelector(".header-rounds");

rock.addEventListener("click", () => {
  humanChoice = "ROCK";
  choiceHuman.textContent = "YOU CHOOSE ROCK!";

  getComputerChoice();
  playRound(humanChoice, computerChoice);
  return humanChoice;
});

console.log(humanChoice);

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

// Score

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Round

function playRound(human, computer) {
  if (human == computer) {
    output.textContent = `IT'S A DRAW`;
    rounds++;
    currentRound.textContent = `ROUND : ${rounds}`;
  } else if (
    (human == "ROCK" && computer == "PAPER") ||
    (human == "PAPER" && computer == "SCISSORS") ||
    (human == "SCISSORS" && computer == "ROCK")
  ) {
    computerScore++;
    rounds++;
    currentRound.textContent = `ROUND : ${rounds}`;
    output.textContent = `You lose! ${computer} beats ${human}`;

    scoreComputer.textContent = `COMPUTER : ${computerScore}`;
    scoreHuman.textContent = `YOU : ${humanScore}`;
  } else if (
    (human == "ROCK" && computer == "SCISSORS") ||
    (human == "PAPER" && computer == "ROCK") ||
    (human == "SCISSORS" && computer == "PAPER")
  ) {
    output.textContent = `You win! ${humanChoice} beats ${computer}`;

    humanScore++;
    rounds++;
    currentRound.textContent = `ROUND : ${rounds}`;
    scoreComputer.textContent = `COMPUTER : ${computerScore}`;
    scoreHuman.textContent = `YOU : ${humanScore}`;
  }
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
