const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculation based on user input
function performCalculation(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

// Function to ask for user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the calculator
async function runCalculator() {
    const num1 = parseFloat(await askQuestion("Enter the first number: "));
    const num2 = parseFloat(await askQuestion("Enter the second number: "));
    const operator = await askQuestion("Enter an operator (+, -, *, /): ");

    performCalculation(num1, num2, operator);

    rl.close();
}

runCalculator();
