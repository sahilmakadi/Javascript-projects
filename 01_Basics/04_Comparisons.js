// Always compare same datatypes else some unexpected results can come

console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number treating it as 0. thats why null > 0 is false and null >= 0 is true

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//dont do these operations


console.log(null === 0); //checks datatype also