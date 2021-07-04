"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let factorial = 1;
let number = prompt("Enter the number: ");
for(let i=1; i<=number; i++) {
    factorial = factorial * i;
    if ( i == number ) {
        console.log("Factorial of " + number + " = " + factorial);
    }
}