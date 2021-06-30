"use strict";
const ps = require("prompt-sync");
const prompt = ps();

number = prompt("Enter a number: ");
if(number == 1) {
    console.log("UNIT");    
}
else if(number == 10) {
    console.log("TEN");
}
else if(number == 100) {
    console.log("HUNDRED");
}
else if(number == 1000) {
    console.log("THOUSAND");
}
else if(number == 10000) {
    console.log("TEN THOUSAND");
}
else {
    console.log("ERROR");
}
