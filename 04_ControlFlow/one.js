// if

// 
// const temp = 40

// if ( temp < 50) {
//     console.log("Temp less than 50");
// } else if (temp < 45) {
//     console.log("Temp less than 45");
// } else {
//     console.log("Temp greater than 50");
// }

// we can also write this but dont write

// const bal = 1000

// if (bal > 500) console.log("test"), console.log("test2");

const isUserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isUserLoggedIn && debitcard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:  // shortcut to paste selected continuosly shift + alt + down arrow
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break; // if no break all the code below executes leaving default
    case 3:
        console.log("March");
        break;

    default:
        break;
}


