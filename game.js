// Rock Paper Scissors Web Game

// Player Weapon Choice
const getPlayerChoice = (playerChoice) => {
  userInput = prompt("Choose your weapon.");
  playerChoice = userInput.toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    alert("Please choose a valid weapon.");
  }
};

// Computer Weapon Choice
const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 6);

  switch (computerChoice) {
    case 0:
    case 1:
      return "rock";
    case 2:
    case 3:
      return "paper";
    case 4:
    case 5:
      return "scissors";
  }
};

// Determine a winner.
const playRound = (playerWeapon, computerWeapon) => {
  if (playerWeapon === computerWeapon) {
    return "No winner, round is tied. Try again.";
  }

  if (playerWeapon === "rock") {
    if (computerWeapon === "paper") {
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }

  if (playerWeapon === "paper") {
    if (computerWeapon === "scissors") {
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }

  if (playerWeapon === "scissors") {
    if (computerWeapon === "rock") {
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }
};

// Play a game.
const playGame = () => {
  const playerWeapon = getPlayerChoice();
  const computerWeapon = getComputerChoice();

  console.log(`Player chooses ${playerWeapon}.`);
  console.log(`Computer chooses ${computerWeapon}.`);

  console.log(playRound(playerWeapon, computerWeapon));
};

for (let i = 0; i < 5; i++) {
  playGame(i);
}
