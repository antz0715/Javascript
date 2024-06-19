// Import the readline module, which allows us to read input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin,  // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Function to generate Fibonacci sequence
// 'n' is the number of Fibonacci numbers to generate
function fibonacci(n) {
    // Start the sequence with the first two Fibonacci numbers
    const sequence = [0, 1];
    
    // Generate the next Fibonacci numbers up to 'n'
    for (let i = 2; i < n; i++) {
        // Add the sum of the previous two numbers to the sequence
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    // Return the complete Fibonacci sequence
    return sequence;
}

// Function to prompt the user for a number and display the Fibonacci sequence
function askForNumber() {
    // Ask the user to enter a number
    rl.question('Enter the number of Fibonacci numbers to generate: ', (input) => {
        // Convert the user input from a string to a number
        const num = parseInt(input, 10);
        
        // Check if the user input is a valid positive number
        if (isNaN(num) || num <= 0) {
            // If not, display an error message and prompt again
            console.log('Please enter a valid positive number.');
            askForNumber(); // Recursive call to ask for the number again
        } else {
            // If the input is valid, generate and display the Fibonacci sequence
            console.log(`First ${num} Fibonacci numbers: ${fibonacci(num).join(', ')}`);
            // Close the readline interface
            rl.close();
        }
    });
}

// Start the process by calling the function to ask for a number
askForNumber();
