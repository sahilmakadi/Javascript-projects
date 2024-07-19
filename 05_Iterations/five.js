const myNums = [1,2,3]

let myTotal = myNums.reduce(function (acc, current) {
    console.log(`acc: ${acc} and current val: ${current}`);
    return acc + current
}, 0)

myTotal = myNums.reduce((acc,curr) => (acc + curr)) // same thing

console.log(myTotal);

const myShoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "cpp course",
        price: 999
    },
    {
        item: "java course",
        price: 5999
    },
    {
        item: "data scientist course",
        price: 12999
    }
]

const bill = myShoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(bill);
