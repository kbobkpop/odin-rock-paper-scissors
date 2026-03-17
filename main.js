console.log("Hello World");

function getComputerChoice() {
    let rpsNumber = Math.floor(Math.random() * 3 + 1);
    switch (rpsNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            console.log("ERRROR!");
            return null;
    }
}

function runX(x) {
    let ones = 0;
    let twos = 1;
    let threes = 2;

    for (i = 0; i < x; i++) {
        let retval = getComputerChoice();
        switch (retval) {
            case 1:
                ones += 1;
                break;
            case 2:
                twos += 1;
                break;
            case 3:
                threes += 1;
                break;
            default:
                console.log("ERRROR!")
        }
    }
    console.log("ones: ", ones);
    console.log("twos: ", twos);
    console.log("threes: ", threes);
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    let loweredChoice = humanChoice.toLowerCase();
    if (loweredChoice == 'rock' || loweredChoice == 'paper' || loweredChoice == 'scissors') {
        return loweredChoice;
    }
    console.log("ERRROR!")
    return null;
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    const score = document.querySelector("#score");

    if (humanChoice === computerChoice) {
        /* console.log("Undecided! You both selected: ", humanChoice); */
        result.innerHTML = `Undecided! You both selected: ${humanChoice}`;
    } else switch(humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                /* console.log("You lose! Paper beats Rock"); */
                result.innerHTML = "You lose! Paper beats Rock";
                computerScore += 1;
            } else {
                /* console.log("You win! Rock beats Scissors"); */
                result.innerHTML = "You win! Rock beats Scissors";
                humanScore += 1;
            }
            break
        case 'paper':
            if (computerChoice === 'scissors') {
                /* console.log("You lose! Scissors beats Paper"); */
                result.innerHTML = "You lose! Scissors beats Paper";
                computerScore += 1;
            } else {
                /* console.log("You win! Paper beats Rock"); */
                result.innerHTML = "You win! Paper beats Rock";
                humanScore += 1;
            }
            break
        case 'scissors':
            if (computerChoice === 'rock') {
                /* console.log("You lose! Rock beats Scissors"); */
                result.innerHTML = "You lose! Rock beats Scissors";
                computerScore += 1;
            } else {
                /* console.log("You win! Scissors beats Paper"); */
                result.innerHTML = "You win! Scissors beats Paper";
                humanScore += 1;
            }
            break
        default:
            /* console.log("ERROR!"); */
            result.innerHTML = "ERROR!";

    }
    score.innerHTML = `Human: ${humanScore}, Computer ${computerScore}`;
    if (humanScore == 5) {
        score.innerHTML = `Hooray! You won the game with ${humanScore} against ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        score.innerHTML = `Too bad :( You lost the game with ${humanScore} against ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
    else {
        score.innerHTML = `Human: ${humanScore}, Computer ${computerScore}`;
    }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", event => {
    event.preventDefault();
    playRound('rock', getComputerChoice());
})

btnPaper.addEventListener("click", event => {
    event.preventDefault();
    playRound('paper', getComputerChoice());
})

btnScissors.addEventListener("click", event => {
    event.preventDefault();
    playRound('scissors', getComputerChoice());
})