// JS Expressions

/**
 * Arithmetic Expressions
 */

console.log("--- Arithmetic Expressions ---");
let result = 5 + 3 * 2; // PEMDAS
console.log(result);

/**
 * String Expressions
 */

console.log("--- String Expressions ---");
let message = "Hello " + "World!"
console.log(message);

/**
 * Logical Expressions
 */

console.log("--- Logical Expressions ---");
let a = 7;
let b = 5;

console.log((a > 5) && (b < 7));

/**
 * Assignment Expressions
 */

console.log("--- Assignment Expressions ---");
let x = 10;
let y = 9;
x = x + y;
console.log(x);

/**
 * Function Expressions
 *
 */

console.log("--- Function Expressions ---");
// function definition
function greeting(name) {
    console.log("Hello " + name + "!");
}

// function call
let intro = greeting("XH");
console.log(intro);