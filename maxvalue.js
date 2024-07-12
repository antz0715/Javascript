// 1. Create an array of float numbers
let floatArray = [2.5, 3.8, 1.2, 4.7, 3.3];

// 2. Function to find the maximum value in the array
function findMaxValue(numbers) {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

// 3. Display the maximum value
let maxValue = findMaxValue(floatArray);
console.log(`The maximum value is: ${maxValue}`);
