let amount = 100;
while(true) {
    let number = Math.floor(Math.random() * 100)
    if(number % 2 == 0) {
        console.log("won the bet")
        amount += 1;
    } else {
        console.log("lose the bet")
        amount -= 1;
    }
    if(amount<=0) {
        console.log("pocket is empty");
        break;
    }
    if(amount>=200) {
        console.log("Now you are rich");
        break;
    }
}