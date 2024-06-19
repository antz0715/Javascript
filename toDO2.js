const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function displayMenu() {
    console.log('\n1. Add Task');
    console.log('2. View Tasks');
    console.log('3. Exit');
    rl.question('Choose an option: ', (option) => {
        if (option == '1') {
            rl.question('Enter task: ', (task) => {
                tasks.push(task);
                console.log('Task added.');
                displayMenu();
            });
        } else if (option == '2') {
            console.log('\nTasks:');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
            displayMenu();
        } else if (option == '3') {
            rl.close();
        } else {
            console.log('Invalid option.');
            displayMenu();
        }
    });
}

displayMenu();
