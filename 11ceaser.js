// Import the readline module, which allows us to read input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin, // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Function to perform the Caesar Cipher encryption
// 'str' is the message we want to encrypt, 'shift' is the number of positions to shift each letter
function caesarCipher(str, shift) {
    // Replace each letter in the string with its encrypted version
    return str.replace(/[a-z]/gi, (char) => {
        // Determine the starting ASCII code ('A' or 'a') based on whether the character is uppercase or lowercase
        const start = char <= 'Z' ? 65 : 97;
        // Calculate the new character code and convert it back to a character
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}

// Prompt the user to enter a message to encrypt
rl.question('Enter a message to encrypt: ', (message) => {
    // Prompt the user to enter a shift value for the encryption
    rl.question('Enter a shift value: ', (shift) => {
        // Call the caesarCipher function to encrypt the message with the provided shift value
        const encrypted = caesarCipher(message, parseInt(shift, 10));
        // Display the encrypted message
        console.log(`Encrypted message: ${encrypted}`);
        // Close the readline interface
        rl.close();
    });
});
