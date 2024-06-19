const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePassword(length, useSpecialChars) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = lowerCaseChars + upperCaseChars + numberChars;
    if (useSpecialChars) {
        allChars += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

function askForPasswordCriteria() {
    rl.question('Enter desired password length: ', (length) => {
        const passwordLength = parseInt(length, 10);
        rl.question('Include special characters? (yes/no): ', (includeSpecialChars) => {
            const useSpecialChars = includeSpecialChars.toLowerCase() === 'yes';
            const password = generatePassword(passwordLength, useSpecialChars);
            console.log(`Generated password: ${password}`);
            rl.close();
        });
    });
}

askForPasswordCriteria();
