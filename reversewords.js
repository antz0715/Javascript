const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

rl.question('Enter a sentence to reverse: ', (input) => {
    const reversed = reverseWords(input);
    console.log(`Reversed sentence: ${reversed}`);
    rl.close();
});
