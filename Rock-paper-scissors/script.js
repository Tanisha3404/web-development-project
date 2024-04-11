let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore_p = document.querySelector("#user-score");
const compScore_p = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random_choice = Math.floor(Math.random() * 3);
    return options[random_choice];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
    userScore++;
    userScore_p.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    } else {
    compScore++;
    compScore_p.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    //Generating computer choice
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
      //Draw Game
    drawGame();
    } else {
    let userWin = true;
    if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});
