"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("Enter the number: ");
let ans;
function validatePrime(n) {
for(let i=2; i<=n/2; i++) {
    ans = n % i;
}
if (ans == 0) {
console.log(n + " is not a prime number");
} else {
console.log(n + " is a prime number");
validatePalindrome(n);
}
}
validatePrime(n);

function validatePalindrome(n) {
    let reverse = 0;
    let n1 = n;
    while ( n > 0 ) {
    let a = n % 10;
    n = parseInt(n / 10);
    reverse = reverse * 10 + a;
    }
    if (n1 == reverse ) {                                     
    console.log("Number is palindrome");
    }
    else {
    console.log("Number is not palindrome");
    }
}

