// Import the readline module, which allows us to read input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin, // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Function to count the frequency of each word in a given string
function wordFrequency(str) {
    // Split the string into words using spaces as separators
    const words = str.split(/\s+/);
    // Create an empty object to store the frequency of each word
    const freq = {};
    
    // Loop through each word in the array
    words.forEach(word => {
        // Convert the word to lowercase to ensure case-insensitive counting
        word = word.toLowerCase();
        
        // If the word is not already a key in the frequency object, add it with a count of 1
        if (!freq[word]) {
            freq[word] = 1;
        } else {
            // If the word is already a key, increment its count by 1
            freq[word]++;
        }
    });
    
    // Return the frequency object, which contains each word and its count
    return freq;
}

// Prompt the user to enter a string
rl.question('Enter a string: ', (input) => {
    // Call the wordFrequency function with the user's input
    const freq = wordFrequency(input);
    
    // Print the word frequencies to the console
    console.log('Word frequencies:', freq);
    
    // Close the readline interface
    rl.close();
});
