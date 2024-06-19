const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, Node.js!');

// Read from a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
