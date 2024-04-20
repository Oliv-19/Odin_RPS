function getComputerChoice() {
    let pcChoice = Math.floor(Math.random() * 3) + 1;

    if (pcChoice == 1) {
        pcChoice= 'Rock'
    } else if (pcChoice == 2){
        pcChoice= 'Paper'
    } else {
        pcChoice= 'Scissors'
    }
    console.log(pcChoice);
    return pcChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    let rock = 'rock'.toUpperCase()
    let paper = 'paper'.toUpperCase()
    let scissors = 'scissors'.toUpperCase()
    let result

    if (playerSelection == computerSelection) {
        result = "It's a tie!"
    } else if (playerSelection == rock && computerSelection == paper) {
        result = "You Lose! Paper beats Rock"
    } else if (playerSelection == paper && computerSelection == rock) {
        result = "You Win! Paper beats Rock"
    }else if (playerSelection == scissors && computerSelection == rock) {
        result = "You Lose! Rocks beats Scissors"
    }else if (playerSelection == rock && computerSelection == scissors) {
        result = "You Win! Rocks beats Scissors"
    }else if (playerSelection == paper && computerSelection == scissors) {
        result = "You Lose! Scissors beats Paper"
    }else if (playerSelection == scissors && computerSelection == paper) {
        result = "You Win! Scissors beats Paper"
    }
    console.log(result)
    return result
}

function playGame(){
    let playerRoundWins = 0
    let pcRoundWins = 0
    for (let i = 0; i <= 4; i++){
        // playRound('rock', getComputerChoice())
        
        playRound(prompt('Rock, Paper or Scissors?'), getComputerChoice()).includes('You Win!') ? playerRoundWins++ : pcRoundWins++
    }

    result = playerRoundWins > pcRoundWins ? 'You Won!': 'The Computer Won'
    console.log(result)
    return result
}
playGame()