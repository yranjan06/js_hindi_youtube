const name = "Ranjan"
const repoCount = 50

// console.log(name + repoCount + " value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Ranjan')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const anotherString = gameName.substring(0, 7)
console.log(anotherString);

const newString = gameName.slice(-6, 3)
console.log(newString);


const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ranjan.com/ranjan%20yadav"

console.log(url.replace('%20','-'));

console.log(url.includes('ranjan'));


