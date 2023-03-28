let userScore = 0;
let compScore = 0;

const userScoreNum = document.getElementById("user-score");
const compScoreNum = document.getElementById("comp-score");
const resultMessage = document.querySelector(".results");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, compChoice) {
  userScore++;
  userScoreNum.innerHTML = userScore;
  compScoreNum.innerHTML = compScore;
  resultMessage.innerHTML = `${convert(userChoice)} beats  ${convert(
    compChoice
  )}. You win!
  <br> Your choise: ${convert(userChoice)}
  <br> Comp choise: ${convert(compChoice)}
  `;
}

function lose(userChoice, compChoice) {
  compScore++;
  userScoreNum.innerHTML = userScore;
  compScoreNum.innerHTML = compScore;
  resultMessage.innerHTML = `${convert(userChoice)} loses to  ${convert(
    compChoice
  )}. You Lost!
  <br> Your choise: ${convert(userChoice)}
  <br> Comp choise: ${convert(compChoice)}
  `;
}

function draw(userChoice, compChoice) {
  resultMessage.innerHTML = `${convert(userChoice)} equals to  ${convert(
    compChoice
  )}. Its a draw!
  <br> Your choise: ${convert(userChoice)}
  <br> Comp choise: ${convert(compChoice)}
  `;
}
function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, compChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissor.addEventListener("click", function () {
    game("s");
  });
}

main();
