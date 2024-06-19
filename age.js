const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

rl.question('Enter your birth year: ', (input) => {
    const birthYear = parseInt(input, 10);
    if (isNaN(birthYear) || birthYear > new Date().getFullYear()) {
        console.log('Please enter a valid year.');
    } else {
        const age = calculateAge(birthYear);
        console.log(`You are ${age} years old.`);
    }
    rl.close();
});
