let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#userScore');
const compScorePara = document.querySelector('#ComputerScore');

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
 console.log("the game was draw");
 msg.innerText = "The game was draw . Please Play again";
 msg.style.backgroundColor = "grey";

}

const showWinner = (userwin , userChoice , compChoice) =>{
    if(userwin){
      userScore++;
      userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else{
      computerScore++;
      compScorePara.innerText = computerScore;
        console.log("You lose");
        msg.innerText = `You lose Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice=== compChoice){
   drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock"){
        userwin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        userwin = compChoice === "scissors" ? false : true;
    } else {
        if(userChoice === "scissors"){
            userwin = compChoice === "rock" ? false : true;
        }
     
    }
    showWinner(userwin , userChoice , compChoice)
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userId = choice.getAttribute("id");
    playGame(userId);
  });
});
