const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

rl.question('Enter desired password length: ', (lengthInput) => {
    const length = parseInt(lengthInput, 10);
    if (isNaN(length) || length <= 0) {
        console.log('Please enter a valid positive number.');
    } else {
        const password = generatePassword(length);
        console.log(`Generated password: ${password}`);
    }
    rl.close();
});
