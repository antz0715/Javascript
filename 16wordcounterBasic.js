const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(sentence) {
    return sentence.trim().split(/\s+/).length;
}

rl.question('Enter a sentence to count the words: ', (input) => {
    const wordCount = countWords(input);
    console.log(`The sentence contains ${wordCount} words.`);
    rl.close();
});
