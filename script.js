function getComputerChoice() {
    pcChoice = Math.floor(Math.random() * 3) + 1;

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

getComputerChoice()