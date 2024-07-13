let score = "33abc" 
// if null in score output 0
// if undefined then nan 
let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber); // to check if input is number

/*
    "33"  -  33
    "33abc" - NaN
    true - 1; false = 0
*/

let isLoggedIn = 1

let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn); 
// 1- true
// "" - false
// "sahil" - false

//if "sahil" is converted to Boolean - false

let someNum = 33

let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof(stringNum));
