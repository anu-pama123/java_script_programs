"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number to convert");
console.log("1) Degree celcious to fahrenheit conversion   2)fahrenheit to degree celcious conversion");
let choice = prompt("Enter your choice ");
function conversion(choice){
switch(choice) {
    case "1":
        let degF = number * 9 / 5 + 32;
        console.log(number + "degree celcious in degree fahrenheit = " + degF);
        if(degF>32 && degF <= 212) {
            console.log("with in the freezing point limit");
        }
        break;
    case "2":
        let degC = number - 32 * 5 / 9;
        console.log(number + "degree fahrenheit in degree in degree celcious = " + degC);
        if(degC > 0 && degC < 100) {
            console.log("with inthe boiling point limit");
        }
}
}
conversion(choice);