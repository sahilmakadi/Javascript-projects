const name = "Sahil"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to initialize string

const Newname = new String('Sahil')
console.log(Newname);
console.log(Newname[0]);
console.log(Newname,__proto__); // you can see this directly on google inspect console by printing string
console.log(Newname.length);
console.log(Newname.charAt(4)); 
console.log(Newname.indexOf('s'));// its case sensitive

const newString = Newname.substring(0, 4)
console.log(newString);
const another = Newname.slice(0,3)
console.log(another);
const another1 = Newname.slice(-3,4) //start from back
console.log(another1);

const another3 = "      ttg     "
console.log(another3);
console.log(another3.trim()); // trim.Start() and trim.End() for trimming from respective ends first whitespaces 

const url = "http://sahil.com/sahil%20makadi" //browser replaces whitespaces with %20
console.log(url.replace('%20', '-'));
console.log(url.includes('sahil'));

// to separate by some char
console.log(url.split('s'));
console.log(Newname.valueOf()); // just prints value of string rather than printing String {"stringValue"}
