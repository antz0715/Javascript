const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['1. Berlin', '2. Madrid', '3. Paris', '4. Rome'],
        answer: '3'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['1. Earth', '2. Mars', '3. Jupiter', '4. Saturn'],
        answer: '2'
    },
    {
        question: 'Who wrote "Harry Potter',
        options: ['1. Harper Lee', '2. J.K. Rowling', '3. Ernest Hemingway', '4. Mark Twain'],
        answer: '2'
    }
];

let currentQuestion = 0;
let score = 0;

function askQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        console.log(q.question);
        q.options.forEach(option => console.log(option));
        rl.question('Your answer: ', (answer) => {
            if (answer === q.answer) {
                score++;
                console.log('Correct!');
            } else {
                console.log('Wrong!');
            }
            currentQuestion++;
            askQuestion();
        });
    } else {
        console.log(`Quiz over! Your score is: ${score}/${questions.length}`);
        rl.close();
    }
}

askQuestion();
