const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countdown(seconds) {
    const interval = setInterval(() => {
        console.log(seconds);
        seconds--;
        if (seconds < 0) {
            clearInterval(interval);
            console.log('Time is up!');
            rl.close();
        }
    }, 1000);
}

rl.question('Enter the number of seconds for the countdown: ', (input) => {
    const seconds = parseInt(input, 10);
    if (isNaN(seconds) || seconds <= 0) {
        console.log('Please enter a valid positive number.');
        rl.close();
    } else {
        countdown(seconds);
    }
});
