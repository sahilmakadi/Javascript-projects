const score = 400

// if want to explicitely define variable

const balance = new Number(100.326)  // NaN if not number
console.log(score);
console.log(balance); // object of number
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // to make it precise to certain digits after point (.) like 100.00
const otherNum = 23.89056

// how many digits yoou want fixed and what digits can be rounded of
// if you provide precision value less than number of digits before point then it turn it to exponential
console.log(otherNum.toPrecision(3));
console.log(otherNum.toPrecision(1)); // exponential

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // By default american numeric system values

//****************************Maths***************************

console.log();
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,2,1));
console.log(Math.max(3,2,6,4));

console.log(Math.random());
console.log((Math.random()*10) + 1); // to insure that value in greater or equal to 1

const min = 10
const max = 20

//To get a random value between min to max
// random() output is always less than 1 and greater than zero

console.log(Math.floor(Math.random() * (max - min + 1) + min));