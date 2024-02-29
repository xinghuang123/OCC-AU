/**
 * Conditional Statements -- allows us to make decisions in our code based on certain conditions.
 */

// if statement --
let old = 1;
if (old > 18) {
    vote();
}

// if-else statement
let age = 12;
if (age > 18) {
    console.log("You can now vote!");
} else {
    console.log("You can`t vote.");
}

// if-else if-else statement
let temp = 110;
if (temp < 0) {
    console.log("It is freezing!");
} else if (temp > 0 && temp < 20) {
    console.log("It is a cool day!");
} else {
    console.log("It is a warm day!");
}

/**
 * switch statement
 * 
 * 3 keywords:
 *  case: keyword for starting a case block
 *  break: keyword for stopping the switch statement from running the next code
 *  default: keyword for running a code when there is no matching case found
 * 
 */

let day = "Monday";
switch (day) {
    case "Friday":
        console.log("It is Friday! End of week!");
        break;
    default:
        console.log("It is a regular day!");
    case "Monday":
        console.log("It is Monday! Start of week!");
        break;
}