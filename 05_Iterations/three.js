// const coding = ["js", "ruby", "java", "cpp"]

// for each do not return anything
// const values = coding.forEach( () => {
//     return item
// })

// console.log(values);


// FILTER

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (nums) => nums > 4 )

// returns array of values

console.log(newNums);

// if you start a block scope in callback function you need to return using return keyword

const OldNums = myNums.filter( (nums) => {
    return nums > 4
})

console.log(OldNums);

 // For doing it with forEach

 const Nums = []

 myNums.forEach((nums) => {
    if (nums > 4) {
        Nums.push(nums)
    }
 })

 console.log(Nums);


 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
userBooks = books.filter( (bk) => (bk.publish >= 2000))
userBooks = books.filter( (bk) => (bk.genre === 'History' && bk.publish >= 1995) )
console.log(userBooks);
