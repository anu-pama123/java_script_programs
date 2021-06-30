"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let day = prompt("Enter the day : ");
var month = prompt("Enter the month : ");
var march, april, may, june;
if (month ==  march && day > 20) {
    console.log("True");
}
else if(month == april && day >0) {
    console.log("True");
}
else if(month == may && day > 0 && day<31) {
    console.log("True");
}
else if(month == june && day < 20) {
    console.log("True")
}
else {
    console.log("False")
}