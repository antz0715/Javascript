// Import the readline module, which allows us to read input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin, // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Define the template for the story with placeholders for adjective, noun, and verb
const storyTemplate = `Once upon a time, there was a [adjective] [noun] who loved to [verb].`;

// Function to prompt the user for inputs and create the story
function askForInputs() {
    // Ask the user to enter an adjective, noun, and verb separated by spaces
    rl.question('Enter an adjective, noun, and verb separated by spaces: ', (input) => {
        // Split the input string into an array of words
        const inputs = input.split(' ');

        // Check if the user provided exactly three words
        if (inputs.length !== 3) {
            // If not, display an error message and prompt again
            console.log('Please provide exactly three words.');
            askForInputs(); // Recursive call to ask for inputs again
        } else {
            // If the user provided exactly three words, destructure them into variables
            const [adjective, noun, verb] = inputs;
            // Replace the placeholders in the story template with the user's words
            const story = storyTemplate
                .replace('[adjective]', adjective)
                .replace('[noun]', noun)
                .replace('[verb]', verb);

            // Display the generated story
            console.log(`\nHere is your story:\n${story}`);
            // Close the readline interface
            rl.close();
        }
    });
}

// Call the function to start the input process
askForInputs();
