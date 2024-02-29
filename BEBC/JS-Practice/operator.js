// JS Operators

/**
 * Arithmetic Operators
 * (+), (-), (*), (/), (%)
 */

let num1 = 32;
let num2 = 45;

// Addition
let sum = num1 + num2;
console.log("The sum is: ", sum);

// Substraction
let difference = num1 - num2;
console.log(difference);

// Multiplication
let product = num1 * num2;
console.log(product);

// Division
let quotient = num1 / num2;
console.log(quotient);

// Modulo
let mod = num1 % num2;
console.log(mod);

/**
 * Assignment Operator
 * (=), (+=), (-+=), (*=), (/=)
 */

// Equals (=)
let equals = "this value";
console.log(equals);


let a = 5;

// Addition Assignment (+=)
a += 5;
console.log(a);

// Substraction Assignment (-=)
a -= 6;
console.log(a);

// Multiplication Assignment (*=)
a *= 9;
console.log(a);

// Division Assignment (/=)
a /= 10;
console.log(a);

/**
 * Comparison Operators - retures Boolean values (true or false)
 * Greater than (>)
 * Less than (<)
 * Less than or equal to (<=)
 * Greater than or equal to (>=)
 * Equal to (==) --> loose equality; check if it has the same valuse; disregards data type
 * Strict Equal to (===) --> checks not just the value, but also the data type
 * Not Equal to (!=)
 */

console.log(10 > 9);
console.log(10 < 9);
console.log(10 <= 9);
console.log(10 >= 9);
console.log(10 == 9);
console.log(10 === 9);
console.log('5' == 5); //true
console.log('5' === 5); //false
console.log(10 != 11);

/**
 * Logical Operators -- combine boolean values and logical operators to evalute conditions
 * 
 * AND (&&), OR (||), NOT (!)
 * 
 */

// AND (&&) -- returns true if both conditions are true
console.log("AND (&&):", true && false);

// OR (||) -- reture true if at least one of the conditions on its left or right is true
console.log("OR (||):", true || false);

// NOT (!) --
console.log("NOT (!):", !true);

/**
 * Unary Operators
 * increment (++), incrementing by 1
 * decrement (--), decrementing by 1
 */

let x = 10;

x++; // x + 1
console.log(x);

x--; // x - 1
console.log(x);

/**
 * Ternary Operator --> simple conditional statement in a single line; take 3 operands and returns a value based on a condition.
 * 
 * condition ? expression if true : expression if false
 */

let age = 19;

let message = (age >= 18) ? "You are of legal age." : "You are a minor."
console.log(message);

/**
 * typeof
 */

console.log(typeof (message));
console.log(typeof x);


