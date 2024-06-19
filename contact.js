const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = [];

function displayMenu() {
    console.log('\n1. Add Contact');
    console.log('2. View Contacts');
    console.log('3. Delete Contact');
    console.log('4. Exit');
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Enter contact name: ', (name) => {
                    rl.question('Enter contact phone number: ', (phoneNumber) => {
                        contacts.push({ name, phoneNumber });
                        console.log('Contact added.');
                        displayMenu();
                    });
                });
                break;
            case '2':
                console.log('\nContacts:');
                contacts.forEach((contact, index) => {
                    console.log(`${index + 1}. ${contact.name} - ${contact.phoneNumber}`);
                });
                displayMenu();
                break;
            case '3':
                rl.question('Enter contact number to delete: ', (number) => {
                    const index = parseInt(number, 10) - 1;
                    if (index >= 0 && index < contacts.length) {
                        contacts.splice(index, 1);
                        console.log('Contact deleted.');
                    } else {
                        console.log('Invalid contact number.');
                    }
                    displayMenu();
                });
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log('Invalid option.');
                displayMenu();
                break;
        }
    });
}

displayMenu();
