 
    
let score = 0;
const targetScore = 5;

function playGame(userChoice) {
  
  if (document.getElementById("gameOverMessage").style.display === "block") return;

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  
  document.getElementById("computerChoice").innerText =
    "Computer chose: " + computerChoice;

  
  let roundResult = "";
  if (userChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult = "You win!";
    score++;
  } else {
    roundResult = "Computer wins!";
  }

  
  document.getElementById("result").innerText = roundResult;
  document.getElementById("score").innerText = "Score: " + score;

  
  if (score >= targetScore) {
    endGame();
  }
}

function endGame() {
  
  document.getElementById("gameOverMessage").innerText =
    "Game Over! Final Score: " + score;
  document.getElementById("gameOverMessage").style.display = "block";

  
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => (button.disabled = true));
}

function resetGame() {
  score = 0;
  document.getElementById("score").innerText = "Score: " + score;
  document.getElementById("result").innerText = "";
  document.getElementById("computerChoice").innerText = "";
  document.getElementById("gameOverMessage").style.display = "none";

 
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => (button.disabled = false));
}