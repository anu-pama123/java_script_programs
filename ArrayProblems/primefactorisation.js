"use strict";
const ps = require("prompt-sync");
const prompt = ps();

var array = [];
let ans, i, primeAns;
let number = prompt("Enter the number: ");
console.log("Prime factors are: ")
for (i=1; i <= number; i++) {
    ans = number % i;
    if ( ans == 0 ) {
        let primeAns;
        for(let j=2; j<=i/2; j++) {
            primeAns = i % j;
            if(primeAns == 0) {
                break;
            }
        }
        if (primeAns != 0) {
            array.push(i);
            console.log(array);
        }  
    }
}