// Computer Choice
let rndInt = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
  if (rndInt == 1) {
    let computerChoice = "rock";
    return computerChoice;
  } else if (rndInt == 2) {
    let computerChoice = "paper";
    return computerChoice;
  } else {
    let computerChoice = "scissors";
    return computerChoice;
  }
}

// Human Choice

function getHumanChoice() {
  let humanChoice = prompt("What are you choosing: Rock, Paper or Scissors");
  return humanChoice;
}
