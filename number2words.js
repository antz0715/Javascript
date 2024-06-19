const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function numberToWords(num) {
    if (num === 0) return "zero";

    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 === 0 ? "" : " " + ones[num % 10]);
    if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 === 0 ? "" : " " + numberToWords(num % 100));

    return "Number too large";
}

rl.question('Enter a number to convert to words: ', (input) => {
    const number = parseInt(input, 10);
    if (isNaN(number) || number < 0 || number > 999) {
        console.log('Please enter a valid number between 0 and 999.');
    } else {
        const words = numberToWords(number);
        console.log(`Number in words: ${words}`);
    }
    rl.close();
});
