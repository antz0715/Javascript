// Calculator object to hold operations and current value
const calculator = {
    currentValue: 5,
    
    add: function(num) {
        this.currentValue += num;
        return this.currentValue;
    },
    
    subtract: function(num) {
        this.currentValue -= num;
        return this.currentValue;
    },
    
    multiply: function(num) {
        this.currentValue *= num;
        return this.currentValue;
    },
    
    divide: function(num) {
        if (num !== 0) {
            this.currentValue /= num;
        } else {
            console.log("Error: Division by zero");
        }
        return this.currentValue;
    },
    
    reset: function() {
        this.currentValue = 0;
        return this.currentValue;
    }
};

// Example usage of the calculator
console.log("Initial value:", calculator.currentValue);

console.log("Add 5:", calculator.add(5));
console.log("Subtract 2:", calculator.subtract(2));
console.log("Multiply by 3:", calculator.multiply(3));
console.log("Divide by 2:", calculator.divide(2));

console.log("Reset calculator:", calculator.reset());

// Handling division by zero
console.log("Attempt to divide by 0:", calculator.divide(0));
