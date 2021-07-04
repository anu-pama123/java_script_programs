"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let ans;
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
for (let i=num1; i<=num2; i++) {
    for(let j=2; j<=parseInt(i/2); j++) {
      ans  = i % j;
      if(ans==0){
          break;
      }
    }
    if ( ans == 0 ) {
        console.log(i + " is not a prime number");
    }
    else {
        console.log(i + " is a prime number");
    }
}    
        

