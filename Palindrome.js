const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const sanitized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = sanitized.split('').reverse().join('');
    return sanitized === reversed;
}

rl.question('Enter a string to check if it is a palindrome: ', (input) => {
    if (isPalindrome(input)) {
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }
    rl.close();
});
