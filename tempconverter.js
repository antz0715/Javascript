const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemperature(value, fromUnit, toUnit) {
    let result;
    switch (fromUnit) {
        case 'C':
            if (toUnit === 'F') result = value * 9/5 + 32;
            else if (toUnit === 'K') result = value + 273.15;
            break;
        case 'F':
            if (toUnit === 'C') result = (value - 32) * 5/9;
            else if (toUnit === 'K') result = (value - 32) * 5/9 + 273.15;
            break;
        case 'K':
            if (toUnit === 'C') result = value - 273.15;
            else if (toUnit === 'F') result = (value - 273.15) * 9/5 + 32;
            break;
        default:
            result = 'Invalid unit';
    }
    return result;
}

function askForConversion() {
    rl.question('Enter temperature value: ', (value) => {
        const temp = parseFloat(value);
        rl.question('Enter current unit (C/F/K): ', (fromUnit) => {
            rl.question('Enter unit to convert to (C/F/K): ', (toUnit) => {
                const result = convertTemperature(temp, fromUnit.toUpperCase(), toUnit.toUpperCase());
                console.log(`Converted temperature: ${result}`);
                rl.close();
            });
        });
    });
}

askForConversion();
