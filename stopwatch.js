const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let startTime, endTime, running = false;

function start() {
    if (!running) {
        startTime = new Date();
        running = true;
        console.log('Stopwatch started.');
    } else {
        console.log('Stopwatch is already running.');
    }
}

function stop() {
    if (running) {
        endTime = new Date();
        running = false;
        const elapsed = (endTime - startTime) / 1000;
        console.log(`Stopwatch stopped. Elapsed time: ${elapsed} seconds`);
    } else {
        console.log('Stopwatch is not running.');
    }
}

function reset() {
    startTime = null;
    endTime = null;
    running = false;
    console.log('Stopwatch reset.');
}

function askAction() {
    rl.question('Enter a command (start, stop, reset, exit): ', (command) => {
        switch (command.toLowerCase()) {
            case 'start':
                start();
                break;
            case 'stop':
                stop();
                break;
            case 'reset':
                reset();
                break;
            case 'exit':
                rl.close();
                return;
            default:
                console.log('Invalid command.');
        }
        askAction();
    });
}

askAction();
