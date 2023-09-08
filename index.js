// initallize prompt
let userChoice = "";

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    // 0, 1, 2 respectively of the array
    const index = Math.floor(Math.random() * options.length);
    let choice = options[index]

    //console.log(options[index]); 
    return choice;
}
getComputerChoice();

function playRound(playerSelection, computerSelection){

    playerSelection = userChoice; // from Global Variable
    computerSelection = getComputerChoice();

    // ignore cases
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    // console.log("Player: " +  playerChoice );
    // console.log("Computer: " +  computerChoice);

    try {
        if(playerChoice == computerChoice){
            return "Computer chose "+ computerChoice + "\n" + "It's a tie!";
        }else if(playerChoice == "ROCK" && computerChoice == "PAPER"){
            return "Computer chose "+ computerChoice + "\n" + "You Lose! Paper beats rock.";
        }else if(playerChoice == "ROCK" && computerChoice == "SCISSORS"){
            return "Computer chose "+ computerChoice + "\n" + "You WIN! Rock beats scissors.";
        }else if(playerChoice == "PAPER" && computerChoice == "ROCK"){
            return "Copmuter chose "+ computerChoice + "\n" + "You Lose! Rock beats paper.";
        }else if(playerChoice == "PAPER" && computerChoice == "SCISSORS"){
            return "Computer chose " + computerChoice + "\n" + "You Lose! Scissors beats paper.";
        }else if(playerChoice == "SCISSORS" && computerChoice == "ROCK"){
            return "Computer chose " + computerChoice + "\n" + "You Lose! Rock beats scissors.";
        }else if(playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            return "Computer chose " + computerChoice + "\n" + "You Win! Scissors beats paper.";
        }else{
            return "Error: Invalid Choice."
        }
    } catch (error) {
        return "Incorrect Input";
    }
    
}
playRound();

function game(){
    let i = 0;
    while(i < 5){
        // ask more questions till loop ends
        userChoice = window.prompt("Rock, Paper or Scissors?");
        alert(playRound());
        i++;
    }
}
game();