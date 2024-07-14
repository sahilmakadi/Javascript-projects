/*their are basically 2 types of datatypes
 1) Primitive
 2) Non primitive

 On the basis of how they are stored in memory and how they can be access

 Primitive (call by value)

 only copy is generated not get manupulated directly in func

 7 types : String, Number, Boolean, null(return type Object), undefined(return type Undefined), Symbol(return type Symbol), BigInt

 Non Primitive (call by reference)

 Arrays, Objects, functions

 JavaScript is a dynamically typed language, 
 which means that data types of variables are determined 
 by the value they hold at runtime and 
 can change throughout the program as we assign different values to them.

 Type safety is not their.

 const score = 100   not telling if it is a number or String
*/ 

// symbol declaration

const id = Symbol('123') // for uniqueness and it return type Sysmbol
const anotherId = Symbol('123')

console.log(id === anotherId); // false even if same value is their
const bigNumber = 2435678564325554654645n // n for bigInt
console.log(typeof bigNumber);
console.log(typeof undefined);

// All non primitive datatypes have return type of object

const heroes = ["shaktiman", "naagraj", "doga"]

let myobject = {
    name: "sahil",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction);  // this is called object function. function is an object itself

