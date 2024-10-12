// const tinderUser = new Object()

const tinderUser = {}
 
tinderUser.id = "123abc"
tinderUser.name = "Samamy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "sum@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ranjan",
            lastName: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 5: "b"}

// const obj3 = { obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)


const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)



const users = [
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 2,
        email: "h2@gmail.com"
        
    },
    {
        id: 3,
        email: "h3@gmail.com"
        
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



//////. Object distructuring and Json API

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Ranjan"
}

// course.courseInstructor 


const {courseInstructor: Instructor} = course
console.log(Instructor)


// Json Structure 

// {
//     "name" : "Ranjan"                  // here bothe key and value are in the form of string and no need of object define before , curly baces = initiation
//     "coursename" : "Js in Hindi"
//     "price" : "free" 
// }



[
    {},              // Json can be wriiten in the form of array
    {},
    {}
]