const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countLetters(str) {
    const counts = {};
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
    }
    return counts;
}

rl.question('Enter a string: ', (input) => {
    const letterCounts = countLetters(input);
    console.log('Letter counts:', letterCounts);
    rl.close();
});
