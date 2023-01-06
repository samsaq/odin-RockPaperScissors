//making a simple rock paper scissors game
//played in console in a best of 5 format against the computer

//global variables
let userWins = 0;
let computerWins = 0;
let ties = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    //randomly choose rock, paper, or scissors (guess a number between (inclusive) 1 and 3 & use that to return the choice)
    //1 = rock, 2 = paper, 3 = scissors
    let choice = Math.floor(Math.random() * (3 - 1) + 1);
    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getUserChoice() {
    //prompt the user to choose rock, paper, or scissors
    let choice = prompt("Rock, Paper, or Scissors?");
    //convert the choice to the proper case
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    //check if the choice is valid (Rock, Paper, or Scissors), if not, prompt the user again & check again
    while (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = prompt("Invalid choice, please enter Rock, Paper, or Scissors");
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    }
    return choice;
}

//function to determine the winner
function whoWins(userChoice) {
    let computerChoice = getComputerChoice();
    //if the user and computer choose the same thing, it's a tie
    if (userChoice == computerChoice) {
        console.log("It's a tie!");
        return "Tie";
    }
    //if the user chooses rock
    else if (userChoice == "Rock") {
        //if the computer chooses paper, the computer wins
        if (computerChoice == "Paper") {
            console.log("The computer wins! Paper beats Rock!");
            return "Computer Wins";
        }
        //if the computer chooses scissors, the user wins
        else {
            console.log("You win! Rock beats Scissors!");
            return "User Wins";
        }
    }
    //if the user chooses paper
    else if (userChoice == "Paper") {
        //if the computer chooses scissors, the computer wins
        if (computerChoice == "Scissors") {
            console.log("The computer wins! Scissors beats Paper!");
            return "Computer Wins";
        }
        //if the computer chooses rock, the user wins
        else {
            console.log("You win! Paper beats Rock!");
            return "User Wins";
        }
    }
    //if the user chooses scissors
    else {
        //if the computer chooses rock, the computer wins
        if (computerChoice == "Rock") {
            console.log("The computer wins! Rock beats Scissors!");
            return "Computer Wins";
        }
        //if the computer chooses paper, the user wins
        else {
            console.log("You win! Scissors beats Paper!");
            return "User Wins";
        }
    }
}

//function to play a round
function playRound() {
    //use existing functions to get the user's choice and determine the winner
    let userChoice = getUserChoice();
    let winner = whoWins(userChoice);

    //update the global variables
    if (winner == "User Wins") {
        userWins++;
    }
    else if (winner == "Computer Wins") {
        computerWins++;
    }
    else {
        ties++;
    }
    roundsPlayed++;
}

//function to play the game
function playGame() {

    //explain the game and 5 round format
    console.log("Welcome to Rock, Paper, Scissors! The game will be played in 5 rounds. The first player to win 3 rounds wins the game. Good luck!");

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    //display the results
    console.log("You won " + userWins + " times, the computer won " + computerWins + " times, and there were " + ties + " ties.");
    //display the winner
    if (userWins > computerWins) {
        console.log("You won the game!");
    }
    else if (userWins < computerWins) {
        console.log("The computer won the game!");
    }
    else {
        console.log("The game was a tie!");
    }
}

//now play the game
playGame();