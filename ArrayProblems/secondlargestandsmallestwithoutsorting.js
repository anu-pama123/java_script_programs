let count = 1;
var array = [];
console.log("Ten random three digit numbers are: ")
while (count <= 10) {
    let randomNumber = Math.floor(Math.random() * (999-100)) + 100;
    count++;
    console.log(randomNumber);
    array.push(randomNumber);
}
console.log(array);
let largest = secondLargest = array[0];
let smallest = secondSmallest = array[0];
for(let i = 0; i < array.length; i++) {
    if(array[i] > largest) {
        largest = array[i];
    }  
    if(array[i] < smallest) {
        smallest = array[i];
    }
}
for (i = 0 ;i<array.length; i++)  {
    if (array[i] > secondLargest && array[i] < largest) {
        secondLargest = array[i];
    }
    if (array[i] < secondSmallest && array[i] > smallest) {
        secondSmallest = array[i];
    }  
}
console.log("Second largest number = " + secondLargest);
console.log("Second smallest number = " + secondSmallest);

