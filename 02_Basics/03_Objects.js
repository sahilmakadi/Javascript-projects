// objects can be defined in two ways 
// 1) Literal    2) Constructor (Object.create to create through constructor)

// Singleton- when you make object through constructor. It's unique in itself
            //If object make through literal , singleton is not formed

// Object literals -  to declare object, just difference is that object is not singleton

// Array give us default keys like 0,1,2,3,4 in form of indexes but in object we can create our own keys
// we can name them anything like 0,1,name,height

// all indexes in backend are kept as string
const mySym = Symbol("key1")
// you cannot directly add symbol in the block directly. you need to define it first

const JsUser = {
    name: "Sahil",
    "Full Name": "SahilMakadi",
    age: 20,
    //now it is taking mySym as string
    //mySym: "myKey1", 
    // to use it as a symbol use like this
    [mySym]: "myKey1", // you can write all keys in [ ] as this is standard
    location: "Pune",
    email: "sahil@vit.edu",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}


//Can be accessed in both ways but second way is preffered for some cases
//because you cant access keys written in block as "Key name", symbols

console.log(JsUser.email);
// console.log(JsUser.full name); // Cannot be done
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
// console.log(JsUser.mySym); // this will return string
console.log(JsUser[mySym]);

JsUser.email = "Sahil.@iit.com"
//Object.freeze(JsUser) // to avoid changing the object
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`); // reference to above object
}

console.log(JsUser.greeting); // this prints reference
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

