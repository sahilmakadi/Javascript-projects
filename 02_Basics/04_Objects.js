// const tinderUser = new Object() // singleton object

const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Makadi"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname?.userfullname.firstname); // to check if it exists '?' is used
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2} // doesnt merge the keys

const obj3 = Object.assign({}, obj1, obj2) // {} is target where the final value goes 
//if you write Object.assign(obj1, obj2) result goes in obj1

// Most used to combine objects

const obj4 = {...obj1, ...obj2}// like array
console.log(obj4);

// Values from database comes in the form of objects . so they are stored in array
const users = [
    {},
    {},
    {}
]

//users[1].email // use like this

console.log(tinderUser);

// everything below is retured in an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// De structuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//const {courseInstructor} = course // you can directly use the key now 
const {courseInstructor: intructor} = course
console.log(instructor);

// In react props.company is some parameter instead {company} is written
// const navbar = ({company}) => {

// }

// API

// some values come from backend in the form of json

// json(javascript object notation) is like this

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// one example of api is --> api.github.com

//sometime comes in array
[
    {},
    {},
    {}
]

//famous api -  randomuser me api

// use website- json formatter
