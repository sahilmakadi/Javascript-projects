let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString('en-IN'));
console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23) // Month starts from 0 in js
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14") // when we write dd-mm-yyyy then month start from 1 
let myCreatedDate = new Date("01-14-2023") //mm-dd-yy
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Number of milli seconds from 1jan 1970 which is set as start time

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//  `${newDate.getDay} and the time`

// usefull

// first parameter is internationalization like india or us
// you can make your localeString like this

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})
