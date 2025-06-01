function getComputerChoice() {
  let rndInt = Math.floor(Math.random() * 3) + 1;

  if (rndInt == 1) {
    let computerChoice = "Rock";
    return computerChoice;
  } else if (rndInt == 2) {
    let computerChoice = "Paper";
    return computerChoice;
  } else {
    let computerChoice = "Scissors";
    return computerChoice;
  }
}

// Human Choice

function getHumanChoice() {
  let humanChoice = prompt("What are you choosing: Rock, Paper or Scissors");
  return humanChoice;
}

// Score

let humanScore = 0;
let computerScore = 0;

// Round

function playRound(human, computer) {
  let humanChoiceLc = human.toLowerCase();
  let humanChoiceCapitalize = humanChoiceLc.replace(
    humanChoiceLc[0],
    humanChoiceLc[0].toUpperCase()
  );

  if (humanChoiceCapitalize == computer) {
    console.log(`It's a draw!`);
  } else if (
    (humanChoiceCapitalize == "Rock" && computer == "Paper") ||
    (humanChoiceCapitalize == "Paper" && computer == "Scissors") ||
    (humanChoiceCapitalize == "Scissors" && computer == "Rock")
  ) {
    console.log(`You lose! ${computer} beats ${humanChoiceCapitalize}`);
    computerScore++;
  } else if (
    (humanChoiceCapitalize == "Rock" && computer == "Scissors") ||
    (humanChoiceCapitalize == "Paper" && computer == "Rock") ||
    (humanChoiceCapitalize == "Scissors" && computer == "Paper")
  ) {
    console.log(`You win! ${humanChoiceCapitalize} beats ${computer}`);
    humanScore++;
  }
}

// playGame function

function playGame() {
  for (i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`Finish! You are the winner of the game:- 
                 You: ${humanScore}  Computer: ${computerScore}`);
  } else if (humanScore == computerScore) {
    console.log(`It's a draw!
                   You: ${humanScore} Computer: ${computerScore}`);
  } else {
    console.log(`Finish! You lost the game:-
                 You: ${humanScore} Computer: ${computerScore}`);
  }
}

playGame();
