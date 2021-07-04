let count = 1;
var array = [];
console.log("Ten random three digit numbers are: ")
while (count <= 10) {
    let randomNumber = Math.floor(Math.random() * (999-100)) + 100;
    count++;
    array.push(randomNumber);
}
console.log(array);

function sort() {
array.sort(function(a, b){return b-a});
console.log(array);
}

sort();
console.log("Second largest element = " + array[1]);
console.log("Second smallest element = " + array[8]);