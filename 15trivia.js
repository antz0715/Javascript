// Import the readline module, which allows us to read input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin,  // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Flashcard data: questions and answers stored in an object
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
    let score = 0; // Variable to keep track of the user's score
    const questions = Object.keys(flashcards); // Get all the questions from the flashcards

    // Loop through each question
    for (const question of questions) {
        // Create a new promise to handle the asynchronous readline question
        await new Promise(resolve => {
            // Ask the question to the user
            rl.question(question + '\nYour answer: ', (answer) => {
                // Convert the user's answer to lowercase and remove extra spaces
                answer = answer.toLowerCase().trim();
                // Check if the user's answer is correct
                if (answer === flashcards[question].toLowerCase()) {
                    console.log("Correct!"); // Inform the user they are correct
                    score++; // Increase the score
                } else {
                    // Inform the user they are wrong and provide the correct answer
                    console.log(`Wrong! The correct answer was ${flashcards[question]}.`);
                }
                console.log(); // Add an empty line for better readability
                resolve(); // Resolve the promise to move to the next question
            });
        });
    }

    // After all questions have been asked, display the final score
    console.log(`Quiz finished! Your score is ${score}/${questions.length}.`);
    rl.close(); // Close the readline interface
}

// Start the quiz
quiz(flashcards);
