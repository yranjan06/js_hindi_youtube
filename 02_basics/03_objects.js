// singleton
// Object.create 


// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ranjan",
    "full name" : "Ranjan Yadav",
    [mySym] : "myKey1",
    age: 18,
    location: "Rohtas",
    email: "ranjan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])


JsUser.email =  "ranjan@chatgpt.com"
Object.freeze(JsUser)

JsUser.email = "ranjan@freeze.com"


console.log(JsUser)