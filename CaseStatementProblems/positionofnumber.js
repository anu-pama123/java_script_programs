"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter the number(multiple of 10): ");
switch (number) {
    case "1":
      console.log("UNIT");
      break;
    case "10":
      console.log("TEN");
      break;
    case "100":
      console.log("HUNDRED");
      break;
    case "1000":
      console.log("THOUSAND");
      break;
  }