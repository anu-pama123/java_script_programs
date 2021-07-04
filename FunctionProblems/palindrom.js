"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let reverse = 0;
let number = parseInt(prompt("Enter a number"));
let n = number;
function validatePalindrome(number) {
    while ( number > 0 ) {
    let a = number % 10;
    number = parseInt(number / 10);
    reverse = reverse * 10 + a;
    }
    if (n == reverse ) {                                     
    console.log("Number is palindrome");
    }
    else {
    console.log("Number is not palindrome");
    }
}
validatePalindrome(number);


