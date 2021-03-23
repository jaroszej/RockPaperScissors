let userScore = 0;
let computerScore = 0;
let drawScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const drawScore_span = document.getElementById("draw-score");
const scoreBoard_div = document.querySelector(".score-board");
const userText_span = document.getElementById("user-text");
const compText_span = document.getElementById("comp-text");
const event_span = document.getElementById("event");
const resultTell_p = document.getElementById("result-tell");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const action = Math.floor(Math.random() * 3);
    return choices[action];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    userText_span.innerHTML = user;
    compText_span.innerHTML = computer;
    event_span.innerHTML = " beats ";
    resultTell_p.innerHTML = "You win!";
    document.getElementById(user).classList.add("user-glow");
    setTimeout(() => document.getElementById(user).classList.remove("user-glow"), 500);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    userText_span.innerHTML = user;
    compText_span.innerHTML = computer;
    event_span.innerHTML = " loses to ";
    resultTell_p.innerHTML = "Computer wins.";
    document.getElementById(user).classList.add("comp-glow");
    setTimeout(() => document.getElementById(user).classList.remove("comp-glow"), 500);
}

function draw(user, computer) {
    drawScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    userText_span.innerHTML = user;
    compText_span.innerHTML = computer;
    event_span.innerHTML = " cancels ";
    resultTell_p.innerHTML = "Draw.";
    document.getElementById(user).classList.add("draw-glow");
    setTimeout(() => document.getElementById(user).classList.remove("draw-glow"), 500);
}

function game(userChoice) {
    let computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            console.log("win");
            win(userChoice, computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            console.log("lose");
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            console.log("draw");
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        console.log("clicked Rock");
        game("Rock");
    }) 

    paper_div.addEventListener('click', function() {
        console.log("clicked Paper");
        game("Paper");
    }) 

    scissors_div.addEventListener('click', function() {
        console.log("clicked Scissors");
        game("Scissors");
    }) 
}
    

main();