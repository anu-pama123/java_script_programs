let randomNumber1 = Math.floor(Math.random() * 10 ) % 7;
if(randomNumber1 > 0) {
    console.log("First dice number is: " + randomNumber1);
}
let randomNumber2 = Math.floor(Math.random() * 10 ) % 7;
if(randomNumber2 > 0) {
    console.log("Second randon number is: " + randomNumber2);
}
let sum = randomNumber1 + randomNumber2;
console.log("Sum of two dice number is: " + sum);