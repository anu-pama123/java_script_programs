"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let result = 1;
let count = 1;
let n = prompt("Enter the limit: ");
while(count <= n) {
     result = result * 2;
     console.log("2 ^ " + count + " = " + result);
     count++;
}
