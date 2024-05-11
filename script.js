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

        let resultDisplay = document.createElement('h3')
        resultDiv.append(resultDisplay)
        resultDisplay.textContent = result
        btns.forEach((element) => {
            //element.removeEventListener('click', callPlaygame)
            element.disabled = true
        })
                

    } 
    if (pcRoundWins == 5 ) {
        result ='The Computer Won'  

        let resultDisplay = document.createElement('h1')
        resultDiv.append(resultDisplay)
        resultDisplay.textContent = result
        btns.forEach((element) => {
            //element.removeEventListener('click', callPlaygame)
            element.disabled = true 
        })
    }
    return result
}



const btns = document.querySelectorAll('button')

btns.forEach((element) => {
    element.addEventListener('click', () =>{
       playGame(element.id) 
       poitnsDisplay.textContent = 'Player: ' + playerRoundWins+ ' Computer: ' + pcRoundWins
    }) 
})
let poitnsDisplay = document.createElement('h3')
points.append(poitnsDisplay)
