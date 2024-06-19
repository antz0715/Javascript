const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
let currentPlayer = 'X';

function printBoard() {
    console.log('  0 1 2');
    board.forEach((row, index) => {
        console.log(index, row.join('|'));
    });
}

function checkWinner() {
    const lines = [
        // Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // Columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ];

    for (const line of lines) {
        if (line[0] === line[1] && line[1] === line[2] && line[0] !== ' ') {
            return line[0];
        }
    }
    return null;
}

function askMove() {
    printBoard();
    rl.question(`Player ${currentPlayer}, enter your move (row and column): `, (input) => {
        const [row, col] = input.split(' ').map(Number);
        if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && board[row][col] === ' ') {
            board[row][col] = currentPlayer;
            const winner = checkWinner();
            if (winner) {
                printBoard();
                console.log(`Player ${winner} wins!`);
                rl.close();
            } else if (board.flat().every(cell => cell !== ' ')) {
                printBoard();
                console.log('The game is a draw.');
                rl.close();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                askMove();
            }
        } else {
            console.log('Invalid move. Try again.');
            askMove();
        }
    });
}

askMove();
