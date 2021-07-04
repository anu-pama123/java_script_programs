"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let count=1
while (count <= 11) {
let randomnumber = Math.floor(Math.random() * 10 ) % 7;
if ( randomnumber == 1 ) {
console.log("HEAD");
count++;
}
if (randomnumber == 0 ) {
console.log("TAIL");
count++; 
}
}
