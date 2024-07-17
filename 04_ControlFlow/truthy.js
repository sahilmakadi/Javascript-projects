const userEmail = "sahil@vit" 

if (userEmail) {
    console.log("Got mail");
} else {
    console.log("Dont have it");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// truthy values

// any string other than empty
// true, "0", "false", " ", [], {}, function(){}

// for arrays 
if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object empty");
}

// false == 0 true
// false == '' true
// 0 == '' true

// Nullish Coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20 // takes first value i.e 10


// from database either null value coming due to poor connection or data came. so you can handle cases

console.log(val1);

// Ternary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
