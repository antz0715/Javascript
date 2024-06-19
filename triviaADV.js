const readline = require('readline');

// Function to create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Flashcard data: questions and answers
const flashcards = {
    "What animal is known as the King of the Jungle?": "lion",
    "What is the fastest land animal?": "cheetah",
    "Which animal is the largest mammal in the world?": "whale",
    "What kind of animal is the only mammal capable of true flight?": "bat",
    "Which animal can be seen on the Porsche logo?": "horse",
    "What is the tallest animal in the world?": "giraffe",
    "Which animal has the longest lifespan?": "greenland shark",
    "What animal is known to have a memory span of three years?": "goldfish",
    "Which animal never sleeps?": "bullfrog"
};

// Function to handle the quiz game
async function quiz(flashcards) {
    let score = 0;
    const questions = Object.keys(flashcards);
    shuffle(questions);

    for (const question of questions) {
        await new Promise(resolve => {
            rl.question(question + '\nYour answer: ', (answer) => {
                answer = answer.toLowerCase().trim();
                if (answer === flashcards[question].toLowerCase()) {
                    console.log("Correct!");
                    score++;
                } else {
                    console.log(`Wrong! The correct answer was ${flashcards[question]}.`);
                }
                console.log();
                resolve();
            });
        });
    }

    console.log(`Quiz finished! Your score is ${score}/${questions.length}.`);
    rl.close();
}

// Start the quiz
quiz(flashcards);
