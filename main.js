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
    if (!(loweredChoice == 'rock' || loweredChoice == 'paper' || loweredChoice == 'scissors')) {
        console.log("ERRROR!")
        return null;
    }
    return loweredChoice;
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Undecided! You both selected: ", humanChoice);
    } else switch(humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
            }
            break
        case 'paper':
            if (computerChoice === 'scissors') {
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            }
            break
        case 'scissors':
            if (computerChoice === 'rock') {
                console.log("You lose! Rock beats Scissors");
                computerScore += 1;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            }
            break
        default:
            console.log("ERROR!");
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore) {
        console.log("Undecided! You both got: " + humanScore + " points.");
    }
    else if (humanScore > computerScore) {
        console.log("You win! With " + humanScore + " vs. " + computerScore + " points.");
    }
    else {
        console.log("You lose! With " + humanScore + " vs. " + computerScore + " points ");
    }
}