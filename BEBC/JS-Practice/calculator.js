// Function to perform the calculation
function calculate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            // check if the second number is not zero to avoid division by zero error
            if (num2 !== 0) {
                return num1 / num2;
            } else (
                console.log("Error: Division by zero.")
            )
            break;
        default:
            return "Invalid operator";
    }
}

// Input from the user
let operator = prompt("Enter operator (+, -, *, /)");
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

// Perform the calculation
var result = calculate(operator, num1, num2);

// Display the result
console.log("Result:", result);