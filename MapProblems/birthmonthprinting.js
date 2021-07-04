let count = 1;
let month = new Map();
let monthOfIndividual = new Map();
month.set(0, "January");
month.set(1, "Februvery");
month.set(2, "March");
month.set(3, "April");
month.set(4, "May");
month.set(5, "June");
month.set(6, "july");
month.set(7, "Augest");
month.set(8, "September");
month.set(9, "October");
month.set(10, "November");
month.set(11, "December");
console.log(month);
console.log("Birth month of fifty individuals between the year of 1992 and 1993 is : ");
while ( count <= 50 ) {
    randomnumber = Math.floor(Math.random() * 12 ) + 1;
    console.log(count + "." + month.get(randomnumber));
    monthOfIndividual[count] = month.get(randomnumber);
    count++;
}
for(i=0; i<12; i++) {
console.log("-------------");
console.log(month.get(i));
for(j=1; j<50; j++) {
//  console.log(month_of_individual[j]);
if (monthOfIndividual[j] == month[i]) {
    console.log("user" + j);
}
}

console.log("--------------");
}

    