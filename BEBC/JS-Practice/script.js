// VARIABLES

const my_name = "Xing";
let my_age = 18;

// Output using console.log()
console.log(my_name);
console.log(my_age);

/*
Multi-line
Comment
 */

//=== DATA TYPES===//

/* Primitive Data Types - most basic data type in JS */

// Number
const my_num = 20;
let my_num2 = 90.4;

console.log("This is a number:", my_num, ",", my_num2);

// String - a sequence of characters
let first_name = "Jean";
console.log("My first name is: ", first_name, ".");

// Boolean - true or false
let isStudent = true;
console.log("This is a Bollean:", isStudent);

// Undefined - uninitialized or missing value
let myUndefined;
console.log(myUndefined);

// Null - intentional absence or empty
const myNull = null;
console.log(myNull);

/**
 * Reference Data Type - holds more complex data types
 */

// Object - represents a collection of key-value pairs enclosed in {}
let person = {
    name: "John",
    age: 30,
    city: 'New York'
}

console.log(person);

// Array - represents an ordered list of values enclosed in []
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Function - represents reusable block of codes that can be invoked by name
function greet(code) {
    console.log("Hello, ", code, "!");
}

greet("JS");

// Data
const today = new Date();
console.log(today);