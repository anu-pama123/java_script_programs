let numberCount = {}; 
while(1) {
    let randomNumber = Math.floor(Math.random() * 6 ) + 1;
    console.log(randomNumber);
    if(randomNumber in numberCount){
        numberCount[randomNumber] = numberCount[randomNumber]+1;
    }else{
        numberCount[randomNumber] = 1;
    }
    if (numberCount[randomNumber] == 10) {
        console.log("Limit reached");
        break;      
    }
}

