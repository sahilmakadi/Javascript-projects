// Immediately Invoked Function Expressions (IIFE)

// if their are variables with same names both in function and global scope, it may happen that the global variable is accesssed as we have reference to it also
// to not compromise and dont make our function polluted by global scope we use IIFE

// IIFE has its separate scope

// we use it when asa app is opened it should be connected to database and we want it to keep separate to avoid pollution

// named iife means function having name
(function chai() {
    console.log('DB CONNECTED');
})(); // Semicolon is neccessary else it gives error while running simultaneous IIFE  // executing a function block , like chai is () and called ()()

//chai() // cant do this 

// unnamed iife
( (name) => {
    console.log(`DATABASE CONNECTED 2 ${name}`);
})("sahil");


