// for of

const arr = [1,2,3,4,5]

for (const arrObject of arr) {
    console.log(arrObject);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

// always unique values
const map = new Map()

map.set("IN", "india")
map.set("USA", "United states of america")
map.set("FR", "France")
map.set("IN", "india") // no duplicates

for (const mapval of map) {
    console.log(mapval); // each key value pair is printed in array
}
for (const [key, val] of map) {
    console.log(key, "- ", val); // each key value pair is printed in array
}

// const myobj = {
//     "game1": "NFS",
//     "game2": "Spiderman"
// }

// for (const [key, value] of myobj) {
//     // object cannot be iterated like this
// }

const myObject = {
    js: 'javascript',
    cpp: "c++",
    rb: "swift",
    swift: "Swift by apple"
}

// For in always gets key 

for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`)
}

const programming = ["js", "rb", "java", "cpp"]

// take keys as indexes of arrays

for (const key in programming) {
    console.log(`${key} index is ${programming[key]}`)
}

// map is also not iterable
for (const key in map) {
    console.log(key);
}

