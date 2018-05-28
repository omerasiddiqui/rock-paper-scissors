// let userChoice = prompt('rock, papers, or scissors?');

let playerOne = 0;
let playerTwo = 0;

init();

function init() {
  rock.addEventListener("click", function() {
    const rock = document.querySelector("#rock");
    userChoice = "rock";
    runGame();
  })

  paper.addEventListener("click", function() {
    const paper = document.querySelector("#paper");
    userChoice = "paper";
    runGame();
  })

  scissors.addEventListener("click", function() {
    const scissors = document.querySelector("#scissors");
    userChoice = "scissors";
    runGame();
  });
}

function runGame() {
  let winner = 5;

  let computerChoice = Math.random() * 10;

  if (computerChoice <= 3.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 6.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  function compare(choice1, choice2) {
    if (choice1 === choice2) {
      return "The result is a tie!";
    } else if (choice1 === "rock") {
      if (choice2 === "scissors") {
        playerOne++;
        return "rock wins!";
      } else {
        playerTwo++;
        return "paper wins!";
      }
    } else if (choice1 === "paper") {
      if (choice2 === "rock") {
        playerOne++;
        return "paper wins!";
      } else {
        playerTwo++;
        return "scissors wins!";
      }
    } else if (choice1 === "scissors") {
      if (choice2 === "paper") {
        playerOne++;
        return "scissors wins!";
      } else {
        playerTwo++;
        return "rock wins!";
      }
    }
  }

  function winnerResult(playerOne, playerTwo) {
    const scoreCard = document.querySelector('#scoreCard');
    const resultUser = document.querySelector("#resultUser");
    const resultComputer = document.querySelector("#resultComputer");
    const result = document.querySelector('.result');
    if (playerOne == winner) {
      scoreCard.classList.add("hide");
      resultUser.classList.remove("hide");
      result.classList.remove("hide");
      console.log("User WINS!");
    } else if (playerTwo == winner) {
      scoreCard.classList.add("hide");
      resultComputer.classList.remove("hide");
      result.classList.remove("hide");
      console.log("Computer WINS!");
    }
  };

  function logInfo() {
    const scoreUser = document.querySelector('.scoreUser')
    const scoreComputer = document.querySelector('.scoreComputer');
    const user = document.querySelector('.user')
    const computer = document.querySelector('.computer')

    console.log("User choice is: " + userChoice);
    user.innerHTML = "User's choice is: " + userChoice;
    console.log("Computer choice is: " + computerChoice);
    computer.innerHTML = "Computer's choice is: " + computerChoice;

    console.log(totals);
    winner.innerHTML = "The result of the match is: " + totals;

    scoreUser.innerHTML = "User score is: " + playerOne;
    scoreComputer.innerHTML = "Computer score is: " + playerTwo;

    if(playerOne === winner || playerTwo === winner){
      playerOne = 0;
      playerTwo =0
      scoreUser.innerHTML = "User score is: " + playerOne;
      scoreComputer.innerHTML = "Computer score is: " + playerTwo;
    }
  }

  var totals = compare(userChoice, computerChoice);

  winnerResult(playerOne, playerTwo);

  logInfo();

};

restartU.addEventListener("click", function() {
  const restartU = document.querySelector("#restartU");
  resultComputer.classList.add("hide");
  resultUser.classList.add("hide");
  scoreCard.classList.remove("hide");
  console.log('game restarted!');
});

restartC.addEventListener("click", function() {
  const restartC = document.querySelector("#restartC");
  resultComputer.classList.add("hide");
  resultUser.classList.add("hide");
  scoreCard.classList.remove("hide");
  console.log('game restarted!');
});
