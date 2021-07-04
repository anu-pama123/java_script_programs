"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("Enter the number: ");
let ans;
for(let i=2; i<=n/2; i++) {
    ans = n % i;
    if(ans == 0) {
        break;
    }
}
if (ans == 0) {
console.log(n + " is not a prime number");
} else {
console.log(n + " is a prime number");
}
