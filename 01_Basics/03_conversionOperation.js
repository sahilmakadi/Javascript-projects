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


//********************operations*******************

let val = 3
let negValue = -val

console.log(2*2);
console.log(2**2);// power of 

let str1 = "hello"
let str2 = "Sahil"
let str3 = str1 + str2 // concat

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "3");
console.log("3"*1);
console.log(+true);
//console.log(true+); gives error
console.log(3 + 3/4%0.25);

let num1,num2,num3;

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;

console.log(gameCounter);
