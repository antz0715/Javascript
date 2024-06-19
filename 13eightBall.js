const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responses = [
    'It is certain.',
    'Without a doubt.',
    'Most likely.',
    'Yes.',
    'Reply hazy, try again.',
    'Better not tell you now.',
    'My reply is no.',
    'Outlook not so good.'
];

function askQuestion() {
    rl.question('Ask the Magic 8 Ball a question: ', (question) => {
        if (question.trim() === '') {
            console.log('Please ask a question.');
            askQuestion();
        } else {
            const randomIndex = Math.floor(Math.random() * responses.length);
            const answer = responses[randomIndex];
            console.log(`Magic 8 Ball says: ${answer}`);
            askAgain();
        }
    });
}

function askAgain() {
    rl.question('Do you want to ask another question? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            askQuestion();
        } else {
            console.log('Goodbye!');
            rl.close();
        }
    });
}

askQuestion();
