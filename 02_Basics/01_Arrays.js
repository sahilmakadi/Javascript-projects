

const myArr = [0, 1, 2, 3, 5, 4]

const myHeroes = ["shaktiman", "najraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

myArr.unshift(9) // add at first
myArr.shift() // remove first

console.log(myArr);
// console.log(myArr.includes(1));
// console.log(myArr.indexOf(3));

// const newarr = myArr.join()

// console.log(myArr);
// console.log(newarr);
// console.log(typeof newarr); // string

console.log("A ",myArr);
const myn1 = myArr.slice(0,3) // 3 is not included

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(0,3) // It directly manipulates the array and 3 is included
console.log(myn2);
console.log("C ", myArr);




