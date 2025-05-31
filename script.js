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

console.log(getComputerChoice());
