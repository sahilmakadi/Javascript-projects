// for each

const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
// } )

// coding.forEach(printMe)

// function printMe(val) {
//     console.log(val);
// }

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
    },
    {
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})