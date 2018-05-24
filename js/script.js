// let userChoice = prompt('rock, papers, or scissors?');

  let playerOne = 0;
  let playerTwo = 0;

  let scoreCard = document.querySelector('#scoreCard');
  let resultUser = document.querySelector("#resultUser");
  let resultComputer = document.querySelector("#resultComputer");


  let rock = document.querySelector("#rock");
  let paper = document.querySelector("#paper");
  let scissors = document.querySelector("#scissors");

  let restart = document.querySelector(".restart");

  init();

  function init() {
    rock.addEventListener("click", function() {
      userChoice = "rock";
      runGame();
    })

    paper.addEventListener("click", function() {
      userChoice = "paper";
      runGame();
    })

    scissors.addEventListener("click", function() {
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

    if (playerOne == winner) {
      scoreCard.classList.add("hide");
      resultUser.classList.remove("hide");
      console.log("User WINS!");
  } else if (playerTwo == winner) {
      scoreCard.classList.add("hide");
      resultComputer.classList.remove("hide");
      console.log("Computer WINS!");
    }
  };

    var totals = compare(userChoice, computerChoice);

    winnerResult(playerOne, playerTwo);

    console.log("User choice is: " + userChoice);
    document.querySelector('.user').innerHTML = "User's choice is: " + userChoice;
    console.log("Computer choice is: " + computerChoice);
    document.querySelector('.computer').innerHTML = "Computer's choice is: " + computerChoice;

    console.log(totals);
    document.querySelector('.winner').innerHTML = "The result of the match is: " + totals;

    document.querySelector('.scoreUser').innerHTML = "User score is: " + playerOne;
    document.querySelector('.scoreComputer').innerHTML = "Computer score is: " + playerTwo;



restart.addEventListener("click", function(){
  resultComputer.classList.add("hide");
  resultUser.classList.add("hide");
  scoreCard.classList.remove("hide");
  playerOne = 0;
  playerTwo = 0;
});
};
