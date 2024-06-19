const readline = require('readline');

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle the guessing game
function guessingGame() {
    const randomNumber = generateRandomNumber();
    console.log("Guess the number between 1 and 100!");

    rl.on('line', (input) => {
        const guess = parseInt(input);

        if (isNaN(guess)) {
            console.log("Invalid input. Please enter a number.");
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
        } else if (guess === randomNumber) {
            console.log("Congratulations! You guessed the correct number.");
            rl.close();
        }
    });
}

// Start the game
guessingGame();
