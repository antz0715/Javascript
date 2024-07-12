const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Create an array of favorite fruits
let favoriteFruits = ["Apple", "Banana", "Cherry", "Date"];

// 2. Function to display the first and last fruit in the array
function displayFirstAndLastFruits(fruits) {
  console.log(`First fruit: ${fruits[0]}`);
  console.log(`Last fruit: ${fruits[fruits.length - 1]}`);
}

// 3. Function to add a new fruit to the array
function addFruit(fruits, newFruit) {
  fruits.push(newFruit);
  console.log(`${newFruit} has been added to the list.`);
  displayArrayLength(fruits);
  displayUpdatedArray(fruits);
}

// 4. Function to display the length of the array
function displayArrayLength(fruits) {
  console.log(`The length of the array is: ${fruits.length}`);
}

// 5. Function to display the updated array
function displayUpdatedArray(fruits) {
  console.log("Updated list of fruits:", fruits);
}

// Display the first and last fruits
displayFirstAndLastFruits(favoriteFruits);
displayUpdatedArray(favoriteFruits);

// Read user input from the console
rl.question('Enter a new fruit to add to the list: ', (newFruit) => {
  addFruit(favoriteFruits, newFruit);
  rl.close();
});
