"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter the number: ");
console.log("Week day: ");
switch (number) {
    case "0":
      console.log("Sunday");
      break;
    case "1":
      console.log("Monday");
      break;
    case "2":
       console.log("Tuesday");
      break;
    case "3":
      console.log("Wednesday");
      break;
    case "4":
      console.log("Thursday");
      break;
    case "5":
      console.log("Friday");
      break;
    case "6":
      console.log("Saturday");
  }