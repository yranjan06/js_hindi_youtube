function sayMyname(){
console.log("R");
console.log("A");
console.log("N");
console.log("J");
console.log("A");
console.log("N");
}

// sayMyname()

// function addTwonumbers(num1, num2){
//     console.log(num1 + num2);
    
// }


// function addTwonumbers(num1, num2){
//   let result = num1 + num2
//   return result
    
// }

// const result = addTwonumbers(2, 5)
// // console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){                            //  usrname is taken udefined which mens false in js , it can be taken as (!username)= which alsp menas false
//         console.log("Please enter a username");  
//         return      
//     }

//     return `${username} just logged in`
// }

// console.log(loginUserMessage())



function calculateCarPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000))

const user = {
  userName : "Ranjan",
  price : 199
}

function handleObject(anyObject){
  console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
  
}

handleObject(user)

const myArray =[200, 300, 400, 500]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myArray))