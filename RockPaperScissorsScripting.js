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
        return "Tie";
    }
    //if the user chooses rock
    else if (userChoice == "Rock") {
        //if the computer chooses paper, the computer wins
        if (computerChoice == "Paper") {
            return "Computer Wins";
        }
        //if the computer chooses scissors, the user wins
        else {
            return "User Wins";
        }
    }
    //if the user chooses paper
    else if (userChoice == "Paper") {
        //if the computer chooses scissors, the computer wins
        if (computerChoice == "Scissors") {
            return "Computer Wins";
        }
        //if the computer chooses rock, the user wins
        else {
            return "User Wins";
        }
    }
    //if the user chooses scissors
    else {
        //if the computer chooses rock, the computer wins
        if (computerChoice == "Rock") {
            return "Computer Wins";
        }
        //if the computer chooses paper, the user wins
        else {
            return "User Wins";
        }
    }
}

//function to play a round
function playRound(userChoice) {
    //use existing functions to get the user's choice and determine the winner
    //let userChoice = getUserChoice();
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
    checkWins();
}

//function to check status of the current game & go to the win condition once 5 rounds have been played
function checkWins() {

    //find the score display elements
    const playerScore = document.querySelector(".playerScore");
    const computerScore = document.querySelector(".computerScore");

    //update the score display elements
    playerScore.textContent = `Player: ${userWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;

    if (roundsPlayed === 5) {
        //display the winner
        if (userWins > computerWins) {
            displayWinner("Player");
        }
        else if (userWins < computerWins) {
            displayWinner("Computer");
        }
        else {
            displayWinner("Tie");
        }
    }
}

//function that replaces buttons and score display with winner message
function displayWinner(winner) //winner is a string that is either "Player", "Computer", or "Tie"
{
    const buttonContainer = document.querySelector(".buttonContainer");
    const scoreContainer = document.querySelector(".scoreContainer");

    //remove the buttons & score display
    buttonContainer.remove();
    scoreContainer.remove();

    //create a new div to hold the winner message
    const winnerContainer = document.createElement("div");
    winnerContainer.classList.add("winnerContainer");
    //add the winner as an h2 within the div
    const winnerMessage = document.createElement("h2");
    winnerContainer.appendChild(winnerMessage);
    //add the winner message
    if(winner === "Player")
    {
        winner = "You";
    }
    else if(winner === "Computer")
    {
        winner = "The computer";
    }
    else if (winner === "Tie")
    {
        winner = "Nobody (It's a tie!)";
    }
    winnerMessage.textContent = `The winner is ${winner}!`;
    //add the div to the body
    document.body.appendChild(winnerContainer);
}