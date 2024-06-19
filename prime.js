const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question('Enter a number to check if it\'s prime: ', (input) => {
    const number = parseInt(input, 10);
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        if (isPrime(number)) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is not a prime number.`);
        }
    }
    rl.close();
});
