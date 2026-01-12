// #Primitive Types 
// String, Number, Boolearn, null, undefined, BigInt, symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


// #Non-Primitive (Reference)
// Array, Object, Functions
const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Sharad",
    age: 29,
}

const myFunction = function(){
    console.log("Hellow JS");
}

console.log(typeof Symbol)

