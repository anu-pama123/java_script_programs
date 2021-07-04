"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let min = 0;
let max = 100;
let number = prompt("Guess a number ");
while ( 1 ) {
   let mid = parseInt((max+min)/ 2);
   if(mid == number) {
       console.log("number is :" + number);
       break;
   }
   let choice = prompt("1 if number grater than " + mid + ", else 0 :  ");
   if(choice == 1) {
       min = mid;
   }
   if(choice == 0) {
       max = mid;
   }
}
