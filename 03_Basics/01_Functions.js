function sayMyName() {
    console.log("Sahil");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    console.log("sahil");
    return (number1 + number2);
}

//addTwoNumbers(4, "a") // thinks both are strings
//addTwoNumbers(4, null)

const result = addTwoNumbers(3,5)
console.log(result);

//function loginUserMessage(username)

// if you want to give default value
function loginUserMessage(username = "sam"){
    //if(username === undefined) 
    if(!username){ // undefined means false
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// if argument is not passed it gives undefined in username 

console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Sahil",
    price: 199
}

// we need to check if argument passed is object or not. 
// Typescript have advantage over javascript about this as it automatically checks these things
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));