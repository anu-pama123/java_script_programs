"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let result = 1;
let n = prompt("Enter the limit: ");
for(let i=1; i<=n; i++) {
     result = result * 2;
     console.log("2 ^ " + i + " = " + result);
}

