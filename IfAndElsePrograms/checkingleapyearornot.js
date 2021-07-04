"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let year = prompt("Enter a year : ");
if((year % 100 == 0) ? (year % 400 ==0) : (year % 4 == 0)) {
    console.log("Leap year")
}  else {
    console.log("Not a leap year");
}