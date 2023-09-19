// gloabl variables
// initialize choices as strings
let userChoice = "";
let compChoice = "";

// initialize counter
let playerScore = 0;
let computerScore = 0;

// elements from HTML file
const btnEls = document.querySelectorAll("button");
const resultEl = document.querySelector("#results");
const computerScoreEL = document.querySelector("#compScore");
const playerScoreEL = document.querySelector("#userScore");
const outcomeEL =  document.querySelector("#Outcome");

// Assign a event listener to each button
btnEls.forEach((b) =>{
    b.addEventListener('click', ()=>{
    //  console.log(b.id +": clicked");
        userChoice = b.textContent; // gets text from button
        compChoice = getComputerChoice(); // computer random choice
        game();
    });

});

// Radomly select a choice for computer
function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    // 0, 1, 2 respectively of the array
    const index = Math.floor(Math.random() * options.length);
    let choice = options[index]

    //console.log(options[index]); 
    return choice;
}

// Compares the choices of Computer and Player, adds to a point counter
// Outputs results of each round and declares who won.
function playRound(playerSelection, computerSelection){
    // ignore cases
    let playerChoice = "";
    let computerChoice = "";
    playerChoice = playerSelection.toUpperCase();
    computerChoice = computerSelection.toUpperCase();
    
    try {
        if(playerChoice == computerChoice){
            resultEl.textContent = "Computer chose "+ computerChoice + " It's a tie!"
        }
        else if(playerChoice == "ROCK" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose "+ computerChoice + " You Lose! Paper beats rock.";
            computerScore += 1;
            // If this win gets a player/computer to win, tells game() to announce
            // the winner automatically (without needing to click a choice button again)
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "ROCK" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose "+ computerChoice + " You WIN! Rock beats scissors.";
            playerScore += 1;
            if(playerScore == 5){
                game();
            }
        }
        else if(playerChoice == "PAPER" && computerChoice == "ROCK"){
            resultEl.textContent = "Computer chose "+ computerChoice + " You Lose! Rock beats paper.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "PAPER" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose " + computerChoice + " You Lose! Scissors beats paper.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "SCISSORS" && computerChoice == "ROCK"){
            resultEl.textContent = "Computer chose " + computerChoice + " You Lose! Rock beats scissors.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose " + computerChoice + " You Win! Scissors beats paper.";
            playerScore += 1;
            if(playerScore == 5){
                game();
            }
        }
        else{
            resultEl.textContent = "";
        }
    } catch (error) {
        return "Incorrect Input";
    }    
}

// Updates the score of the game
// Limits a game to 5 rounds only
function game(){
    
    if (playerScore == 5) {
        return outcomeEL.textContent = "Player Wins!";
    }else if(computerScore == 5){
        return outcomeEL.textContent = "Computer Wins!";
    }else{
        // plays a round
        playRound(userChoice, compChoice);     
        // outputs results of rounds in HTML  
        computerScoreEL.textContent = computerScore;
        playerScoreEL.textContent = playerScore;
    }
}
// reset the scores
function newGame(){
    computerScoreEL.textContent = computerScore;
    playerScoreEL.textContent = playerScore;
    resultEl.textContent = "";
    outcomeEL.textContent= "";
    playerScore = 0;
    computerScore = 0;
}

