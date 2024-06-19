let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const drawGame = () => {
    // console.log("game was draw");
    msg.innerHTML = "Game was Draw ! play Again";
    msg.style.backgroundColor = "#153448";
}

const shoeWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        // console.log("you win");
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win ! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose");
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose ! ${comChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () => {
    //rock, paper ,scissor
    let options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}
const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    //console.log("comp choice = ", comChoice);
    const comChoice = genCompChoice();

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //sciessor / paper 
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock/scissor
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        shoeWinner(userWin, userChoice, comChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});