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
}

// Display the first and last fruits
displayFirstAndLastFruits(favoriteFruits);

// Add a new fruit to the array and display the updated list
addFruit(favoriteFruits, "Elderberry");

// Display the length of the array
console.log(`The length of the array is: ${favoriteFruits.length}`);

// Display the updated array
console.log("Updated list of fruits:", favoriteFruits);

