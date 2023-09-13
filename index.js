
let userChoice = "";
let compChoice = "";
let playerScore = 0;
let computerScore = 0;

const btnEls = document.querySelectorAll("button");
const resultEl = document.querySelector("#results");
const computerScoreEL = document.querySelector("#compScore");
const playerScoreEL = document.querySelector("#userScore");
const outcomeEL =  document.querySelector("#Outcome");

btnEls.forEach((b) =>{
    b.addEventListener('click', ()=>{
    //  console.log(b.id +": clicked");
        userChoice = b.textContent;
        compChoice = getComputerChoice();
        game();
    });

});

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    // 0, 1, 2 respectively of the array
    const index = Math.floor(Math.random() * options.length);
    let choice = options[index]

    //console.log(options[index]); 
    return choice;
}

function playRound(playerSelection, computerSelection){
    // ignore cases
    let playerChoice = "";
    let computerChoice = "";
    playerChoice = playerSelection.toUpperCase();
    computerChoice = computerSelection.toUpperCase();
    
    try {
        if(playerChoice == computerChoice){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "It's a tie!"
        }
        else if(playerChoice == "ROCK" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "You Lose! Paper beats rock.";
            computerScore += 1;
            // If this win gets a player/computer to win, tells game to announce
            // the winner automatically (without needing to click a choice button again)
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "ROCK" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "You WIN! Rock beats scissors.";
            playerScore += 1;
            if(playerScore == 5){
                game();
            }
        }
        else if(playerChoice == "PAPER" && computerChoice == "ROCK"){
            resultEl.textContent = "Copmuter chose "+ computerChoice + "\n" + "You Lose! Rock beats paper.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "PAPER" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Lose! Scissors beats paper.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "SCISSORS" && computerChoice == "ROCK"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Lose! Rock beats scissors.";
            computerScore += 1;
            if(computerScore == 5){
                game();
            }
        }
        else if(playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Win! Scissors beats paper.";
            playerScore += 1;
            if(playerScore == 5){
                game();
            }
        }
        else{
            resultEl.textContent = "Error";
        }
    } catch (error) {
        return "Incorrect Input";
    }    
}

function game(){
    
    if (playerScore == 5) {
        return outcomeEL.textContent = "Player Wins!";
    }else if(computerScore == 5){
        return outcomeEL.textContent = "Computer Wins!";
    }else{
        playRound(userChoice, compChoice);       
        computerScoreEL.textContent = computerScore;
        playerScoreEL.textContent = playerScore;
    }
}

