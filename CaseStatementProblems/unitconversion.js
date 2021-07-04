"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter the number(1.feet to inch, 2.feet to meter, 3.inch to feet, 4.meter to feet):");
let convertingNumber = 5;
switch (number) {
    case "1":
        let result1 = convertingNumber * 12;
        console.log("Feet to inch = " + result1);
        break;
    case "2": 
        let result2 = convertingNumber / 3.281;
        console.log("Feet to meter = " + result2);
        break;
    case "3":
        let result3 = convertingNumber / 12;
        console.log("Inch to feet = " + result3);
        break;
    case "4":
        let result4 = convertingNumber * 3.281;
        console.log("Meter to feet = " + result4); 
        break; 
    default:
        console.log("Invalid number");
        break;                 
}