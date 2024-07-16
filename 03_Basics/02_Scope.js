
{
    //this is called scope
    // function scope , if else scope
    // object declaration is different
}
let a =300
if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner- ",a);
}

console.log(a);
// var can even be accessed out of the block which should not be allowed

// global scope in vs code node and browser is different

function one() {
    const username = "sahil"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one();

if (true) {
    const username = "sahil"
    if (username === "sahil") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// ***************************** INTERESTING *********************************

addone(9)
function addone(value) {
    return num + 1
}

//addone(9)
//addTwo(6); // because we have take it in variables
const addTwo = function(num) {
    return num + 2
}

    addTwo(6);