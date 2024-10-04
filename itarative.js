// Input: three numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

// Store numbers in an array
let numbers = [num1, num2, num3];

// Sort the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

// Print the sorted numbers
console.log("Numbers in ascending order:",numbers);