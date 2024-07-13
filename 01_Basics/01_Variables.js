const accountId = 1234
let accountEmail = "xyz@.com"
var accountNum = 2 
accountCity = "Jaipur" // not a good practice

var accountState
console.log(accountId)

/*
    avoid use of var
    beacuse of of block scope and functional scope problem
*/

console.table([accountId, accountEmail, accountNum, accountCity])
console.log(accountState);