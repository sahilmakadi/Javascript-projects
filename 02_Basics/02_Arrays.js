const marvel_Heros = ["Thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel_Heros.push(dc)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

const allHeroes = marvel_Heros.concat(dc)

console.log(allHeroes);

const all_new_heroes = [...marvel_Heros, ...dc] // splash way
console.log(all_new_heroes); // prefer this to concat

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = anotherArray.flat(Infinity) // clears all depth
console.log(usable_another_array); 

console.log(Array.isArray("rahan"))
console.log(Array.from("sahil")); // convert to array
console.log(Array.from({name: "sahil"})); // interesting-- empty array--- we need to tell if to make array of key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
