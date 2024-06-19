const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

rl.question('Enter a number to calculate its factorial: ', (input) => {
    const number = parseInt(input, 10);
    if (isNaN(number) || number < 0) {
        console.log('Please enter a valid non-negative number.');
    } else {
        const result = factorial(number);
        console.log(`The factorial of ${number} is ${result}.`);
    }
    rl.close();
});
