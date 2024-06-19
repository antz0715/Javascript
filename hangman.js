const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = ['javascript', 'nodejs', 'hangman', 'programming', 'developer'];
const word = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(word.length).fill('_');
let attempts = 6;

function displayWord() {
    console.log(guessedWord.join(' '));
}

function guessLetter() {
    rl.question('Guess a letter: ', (letter) => {
        if (letter.length !== 1 || !/[a-z]/i.test(letter)) {
            console.log('Please enter a valid single letter.');
            guessLetter();
        } else {
            let correctGuess = false;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    guessedWord[i] = letter;
                    correctGuess = true;
                }
            }
            if (!correctGuess) {
                attempts--;
                console.log(`Incorrect guess. You have ${attempts} attempts left.`);
            }
            displayWord();
            if (guessedWord.join('') === word) {
                console.log('Congratulations! You guessed the word!');
                rl.close();
            } else if (attempts === 0) {
                console.log(`Game over. The word was: ${word}`);
                rl.close();
            } else {
                guessLetter();
            }
        }
    });
}

displayWord();
guessLetter();
