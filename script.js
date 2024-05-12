function getComputerChoice() {
    let pcChoice = Math.floor(Math.random() * 3) + 1;

    if (pcChoice == 1) {
        pcChoice= 'Rock'
    } else if (pcChoice == 2){
        pcChoice= 'Paper'
    } else {
        pcChoice= 'Scissors'
    }
    return pcChoice
}

let resultDiv = document.querySelector('.resultsDiv')
let resultText = document.createElement('p')
resultDiv.append(resultText)

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
    resultText.textContent = result
    return result
}

let playerRoundWins = 0
let pcRoundWins = 0
let points = document.querySelector('.points')

let result = ''
let resultDisplay = document.createElement('h2')
resultDiv.append(resultDisplay)
function playGame(playerChoice){

    let playerWin = playRound(playerChoice, getComputerChoice())

    if(playerWin.includes('tie')){
        playerRoundWins = playerRoundWins
        pcRoundWins = pcRoundWins
        
    } else if (playerWin.includes('You Win!')){
        playerRoundWins++ 
    } else{
        pcRoundWins++
    }

    

    if (playerRoundWins == 5 ) {
        
        result = 'You Won!' 
        resultDisplay.textContent = result
        playerRoundWins =0    
        pcRoundWins =0  
    } 
    if (pcRoundWins == 5 ) {
        result ='The Computer Won'  
        resultDisplay.textContent = result
        playerRoundWins =0    
        pcRoundWins =0  
    }

    return result
}



const btns = document.querySelectorAll('button')

btns.forEach((element) => {
    element.addEventListener('click', () =>{
       playGame(element.id) 
       poitnsDisplay.textContent = 'Player: ' + playerRoundWins
       poitnsDisplay2.textContent = ' Computer: ' + pcRoundWins
       
    }) 
})
let poitnsDisplay = document.createElement('h3')
let poitnsDisplay2 = document.createElement('h3')

points.append(poitnsDisplay, poitnsDisplay2)
