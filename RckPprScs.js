const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

function playGame() {
    rl.question('Enter your choice (rock, paper, scissors): ', (userChoice) => {
        if (!choices.includes(userChoice.toLowerCase())) {
            console.log('Invalid choice.');
            playGame();
        } else {
            const computerChoice = getComputerChoice();
            console.log(`Computer chose: ${computerChoice}`);
            console.log(determineWinner(userChoice.toLowerCase(), computerChoice));
            rl.close();
        }
    });
}

playGame();
