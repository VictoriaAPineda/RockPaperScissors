
let userChoice = "";
let compChoice = "";
let playerScore = 0;

const btnEls = document.querySelectorAll("button");
const resultEl = document.querySelector("#results");

btnEls.forEach((b) =>{
    b.addEventListener('click', ()=>{
        // console.log(b.id +": clicked");
        userChoice = b.textContent;
        compChoice = getComputerChoice();
        playRound(userChoice, compChoice);
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
//getComputerChoice();

function playRound(playerSelection, computerSelection){
    // ignore cases
    let playerChoice = "";
    let computerChoice = "";
    playerChoice = playerSelection.toUpperCase();
    computerChoice = computerSelection.toUpperCase();
    
    console.log("Playround() Player: " +  playerChoice);
    console.log("Playround() Computer: " +  computerChoice);

    try {
        if(playerChoice == computerChoice){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "It's a tie!"
        }else if(playerChoice == "ROCK" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "You Lose! Paper beats rock.";
        }else if(playerChoice == "ROCK" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose "+ computerChoice + "\n" + "You WIN! Rock beats scissors.";
        }else if(playerChoice == "PAPER" && computerChoice == "ROCK"){
            resultEl.textContent = "Copmuter chose "+ computerChoice + "\n" + "You Lose! Rock beats paper.";
        }else if(playerChoice == "PAPER" && computerChoice == "SCISSORS"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Lose! Scissors beats paper.";
        }else if(playerChoice == "SCISSORS" && computerChoice == "ROCK"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Lose! Rock beats scissors.";
        }else if(playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            resultEl.textContent = "Computer chose " + computerChoice + "\n" + "You Win! Scissors beats paper.";
        }else{
            resultEl.textContent = "Error";
        }
    } catch (error) {
        return "Incorrect Input";
    }
    
}

function game(){
    while(playRound < 4){
 

        i++;
    }


    // let i = 0;
    // while(i < 5){
    //     // ask more questions till loop ends
    //     userChoice = window.prompt("Rock, Paper or Scissors?");
    //     alert(playRound());
    //     i++;
    // }
}
game();