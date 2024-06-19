const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

function showMenu() {
    console.log('\n1. Add a to-do');
    console.log('2. View to-dos');
    console.log('3. Exit');
    rl.question('Choose an option: ', handleMenu);
}

function handleMenu(option) {
    switch (option) {
        case '1':
            rl.question('Enter a to-do: ', addTodo);
            break;
        case '2':
            viewTodos();
            break;
        case '3':
            rl.close();
            break;
        default:
            console.log('Invalid option.');
            showMenu();
            break;
    }
}

function addTodo(todo) {
    todos.push(todo);
    console.log(`Added: "${todo}"`);
    showMenu();
}

function viewTodos() {
    console.log('\nTo-Do List:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
    showMenu();
}

showMenu();
