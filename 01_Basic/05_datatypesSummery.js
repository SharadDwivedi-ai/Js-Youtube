// Javascript is a dynamic type language.
// #Primitive Types (Call by value)
// String, Number, Boolearn, null, undefined, BigInt, symbol

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// console.log(outsideTemp);

// let userEmail; 

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id == anotherId);


// #Non-Primitive (Reference type)
// Array, Object, Functions
const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Sharad",
    age: 29,
}

const myFunction = function(){
    console.log("Hellow JS");
} 

console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++Stack & Heap Memory+++++++++++++++++++++++++++++++++++

// Stack (used in Primitive type data) , Heap (used in Non-Primitive type data)

// Stack memory working structure
// let myYoutubeName = "sharaddwivedi-ai";
// let anothername = myYoutubeName
// anothername = "dwivedi-ritz@ai"
// console.log(anothername);
// console.log(myYoutubeName);


// Heap memory working structure
let userOne = {
    userId : 149,
    userEmail : "sharad.ritz@gmail.com",
    upi : "srd@ybl"
}
let userTwo = userOne
userTwo.userEmail = "standalone@google.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);


