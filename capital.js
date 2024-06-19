const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeSentence(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

rl.question('Enter a sentence to capitalize: ', (input) => {
    const capitalized = capitalizeSentence(input);
    console.log(`Capitalized sentence: ${capitalized}`);
    rl.close();
});
