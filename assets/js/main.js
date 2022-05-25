let cpuChoice = document.getElementById("cpuChoice");
let result = document.getElementById("result");
let scorePlayer = 0;
let scoreCPU = 0;
let scorePlayerOutput = document.getElementById("scorePlayerOutput");
let scoreCPUOutput = document.getElementById("scoreCPUOutput");



const playerRock = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_rock = document.getElementById('player_rock').value;
    cpuChoice.innerHTML = cpu;
    let scoreResult = scorePlayer + scoreCPU;
    console.log(`its` + scoreResult);

    if (player_rock == "Rock") {
        if (cpu === "Scissors") {
            result.innerHTML = "player wins"
            console.log(scorePlayer += 1);
            scorePlayerOutput.innerHTML = scorePlayer;

        }
        else if (player_rock == cpu) {
            result.innerHTML = "draw"
            return;
        }
        else {
            result.innerHTML = "cpu wins"
            console.log(scoreCPU += 1);
            scoreCPUOutput.innerHTML = scoreCPU;

        }
    }
}

const playerPaper = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_paper = document.getElementById('player_paper').value;
    cpuChoice.innerHTML = cpu;
    let scoreResult = scorePlayer + scoreCPU;
    console.log(`its` + scoreResult);


    if (player_paper === "Paper") {
        if (cpu === "Rock") {
            result.innerHTML = "player wins"
            console.log(scorePlayer += 1);
            scorePlayerOutput.innerHTML = scorePlayer;

        }
        else if (player_paper == cpu) {
            result.innerHTML = "draw"
            return;
        }
        else {
            result.innerHTML = "cpu wins"
            console.log(scoreCPU += 1);
            scoreCPUOutput.innerHTML = scoreCPU;
        }
    }
}

const playerScissors = () => {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    const cpu = gameOptions[Math.floor(Math.random() * 3)]
    const player_scissors = document.getElementById('player_scissors').value;
    cpuChoice.innerHTML = cpu;
    let scoreResult = scorePlayer + scoreCPU;
    console.log(`its` + scoreResult);


    if (player_scissors === "Scissors") {
        if (cpu === "Rock") {
            result.innerHTML = "cpu wins"
            console.log(scoreCPU += 1);
            scoreCPUOutput.innerHTML = scoreCPU;

        }
        else if (player_scissors == cpu) {
            result.innerHTML = "draw"
            return;
        }
        else {
            result.innerHTML = "player wins"
            console.log(scorePlayer += 1);
            scorePlayerOutput.innerHTML = scorePlayer;
        }
    }
}

