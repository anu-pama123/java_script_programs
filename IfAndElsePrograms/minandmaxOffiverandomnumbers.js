const mincount=100
let count=0
let max=0
let min=0
console.log("Five random three digit numbers are : ");
while (count < 5) {
    let randomnumber = Math.floor(Math.random() * 10) * 100;
    if ( randomnumber > mincount ) {
        if ( count == 1 ) {
            max=randomnumber
        }
        else {
            if ( randomnumber > max ) {
                max=randomnumber
            }
        }
        if ( count == 1 ) {
        min=randomnumber
        }
        else {
            if ( randomnumber < min ) {
                min=randomnumber
        }
    }
    count++;
    console.log(randomnumber);
    }
}
console.log("Minimum number = " + min);
console.log("Maximum number = " + max);
