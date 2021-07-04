var array = [];
for(number=10; number<=100; number++) {
    validatePalindrome(number);
}  

function validatePalindrome(number) {
        let n = number;
        let reverse = 0;
        while ( number > 0 ) {
        let a = number % 10;
        number = parseInt(number / 10);
        reverse = reverse * 10 + a;
        }
        if (n == reverse ) {                                     
        array.push(n);
        }
    }
    console.log(array);  

    