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

//*********************************** Memory types********************* */

// Stack(Primitive) - you always get a copy of original value  
//Heap(Non-primitive) - you always get reference of original value

let myName = "Sahil"  //goes in stack

let anotherName = myName
anotherName = "newName" // anotherName changes but mynmae not as only its copy is given in another space

console.log(myName);
console.log(anotherName);
//HeapMemory
// reference is given so value will change
let userOne = {
    email: "nnn@com",
    upi: "user",
}

let usertwo = userOne

usertwo.email = "newmail"

// email changed in both
console.log(userOne.email);
console.log(usertwo.email);