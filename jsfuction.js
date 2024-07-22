// Declare variables of different data types
let name = "Alice";           // String
let age = 30;                 // Number
let isStudent = true;         // Boolean

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Call functions and print output using console.log()
let num1 = 10;
let num2 = 5;

console.log("Addition of", num1, "and", num2, "is:", add(num1, num2));
console.log("Subtraction of", num1, "and", num2, "is:", subtract(num1, num2));
console.log("Division of", num1, "and", num2, "is:", divide(num1, num2));
console.log("Multiplication of", num1, "and", num2, "is:", multiply(num1, num2));

// Debugging
console.log("Variables:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


//chart
// Create a chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Type of chart
    data: {
        labels: ['Addition', 'Subtraction', 'Division', 'Multiplication'],
        datasets: [{
            label: 'Arithmetic Operations',
            data: [add(num1, num2), subtract(num1, num2), divide(num1, num2), multiply(num1, num2)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
