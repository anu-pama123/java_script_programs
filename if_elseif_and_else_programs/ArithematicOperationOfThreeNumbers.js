"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let a = prompt("Enter first number, a= ");
let b = prompt("Enter second number, b= ");
let c = prompt("Enter third number, c= ");
let expression1 = (a + b * c);
console.log("a+b*c = " + expression1);
let expression2 = (a % b + c);
console.log("a%b+c = "+expression2);
let expression3 = (c + a / b);
console.log("c+a/b = " + expression3);
let expression4 = (a * b + c);
console.log("a*b+c = " + expression4);