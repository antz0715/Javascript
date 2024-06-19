const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a message to log: ', (message) => {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) {
            console.log('Error writing to file:', err);
        } else {
            console.log('Message logged!');
        }
        rl.close();
    });
});
