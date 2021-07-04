"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number between 0 to 6: ");
if(number == 0) {
    console.log("SUNDAY");
}
else if(number == 1) {
    console.log("MONDAY");
}
else if(number == 2) {
    console.log("TUESDAY");
}
else if(number == 3) {
    console.log("WEDNESDAY");
}
else if(number == 4) {
    console.log("THURSDAY");
}
else if(number == 5) {
    console.log("FRIDAY");
}
else if(number == 6) {
    console.log("SATURDAY");
}
else {
    console.log("ERROR");
}