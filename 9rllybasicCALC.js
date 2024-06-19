const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        console.log(`Addition: ${a + b}`);
        console.log(`Subtraction: ${a - b}`);
        console.log(`Multiplication: ${a * b}`);
        console.log(`Division: ${a / b}`);

        rl.close();
    });
});
