"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let result = 1;
let n = prompt("Enter the limit: ");
for(let i=2; i<=n; i++) {
    result = 1+1/i;
}
console.log(n + "th harmonic number = " + result);