
let cpuChoice = document.getElementById("cpuChoice");
let playerChoice = document.getElementById("playerChoice");
let result = document.getElementById("result");

const playerRock = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    // const cpuResult = Math.floor(Math.random() * 3);
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_rock = document.getElementById('player_rock').value;
    console.log(cpu)
    cpuChoice.innerHTML = cpu;
    playerChoice.innerHTML = player_rock;

    if (player_rock == "Rock") {
        if (cpu === "Scissors") {
            console.log('player wins');
            result.innerHTML = "player wins"
        }
        else if (player_rock == cpu) {
            console.log('draw');
            result.innerHTML = "draw"

            return;
        }
        else {
            console.log('cpu wins');
            result.innerHTML = "cpu wins"

        }
    }
}

const playerPaper = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    // const cpuResult = Math.floor(Math.random() * 3);
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_paper = document.getElementById('player_paper').value;
    console.log(cpu)

    cpuChoice.innerHTML = cpu;
    playerChoice.innerHTML = player_paper;

    if (player_paper === "Paper") {
        if (cpu === "Rock") {
            console.log('player wins');
            result.innerHTML = "player wins"

        }
        else if (player_paper == cpu) {
            console.log('draw');
            result.innerHTML = "draw"
            return;
        }
        else {
            console.log('cpu wins');
            result.innerHTML = "cpu wins"

        }
    }
}

const playerScissors = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    // const cpuResult = Math.floor(Math.random() * 3);
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_scissors = document.getElementById('player_scissors').value;
    console.log(cpu)
    cpuChoice.innerHTML = cpu;
    playerChoice.innerHTML = player_scissors;

    if (player_scissors === "Scissors") {
        if (cpu === "Rock") {
            console.log('cpu wins');
            result.innerHTML = "cpu wins"

        }
        else if (player_scissors == cpu) {
            console.log('draw');
            result.innerHTML = "draw"
            return;
        }
        else {
            console.log('player wins');
            result.innerHTML = "player wins"
        }
    }
}






