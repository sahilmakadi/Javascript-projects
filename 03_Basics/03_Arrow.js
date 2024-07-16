const user = {
    username: "sahil",
    price: 999,
    // this is used to print username in current context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this); //no context when nothing is executed. prints empty block {}

// But in browser "this" refers to window object

// function chai() {
//     let username = "sahil"
//     console.log(this.username); // you cannot access variable in function using this, but can use outside
// }

//chai()

const chai = () => {
    let username = "sahil"
    console.log(this.username);
}

//chai()

// Arrow function

// explicitely return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
//const addTwo = (num1, num2) => (num1 + num2) // no need to write return keyword


// we need to wrap return statement in parenthesis to return
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 6));