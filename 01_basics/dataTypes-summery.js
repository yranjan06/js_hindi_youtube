//  Primitive

// 7 Types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// Referance (Non Primitive)

// Array, Objects, Functions


// const heros = ["Shaktiman", "Nagraj", "Doga"]
// let myObj = {
//     name:"Ranjan",
//     age : 25,
// }

// const myFunction = function(){
//     console.log("Hello World");
    
// }


// console.log(typeof myFunction );



//********************************************************************* */


// Stack (Primitive), Heap (Non-Primitive).       * stack will give the copy but Heap will give the referance

let anotherName = "MyYoutub"
anotherName = "RANJAN_01_CHANNEL"

// console.log(myYoutube);
console.log(anotherName);



let userone = {
    email: "user1@gmail.com",
    upi:"user@ybl"
}

let usertwo = userone

usertwo.email = "ranjan@gmail.com"

console.log(userone.email);
console.log(usertwo.email);





