// Singleton
Object.create //via Constructor 

// object literals
const mySym = Symbol("key1")

const jsUser = {
    Name: "Sharad",
    "Full Name": "Sharad Dwivedi",
    [mySym]:"myKey1",
    Age: 18,
    Location: "Noida",
    email: "sharad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tues", "Wed"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["Full Name"])
// console.log(jsUser[mySym])

jsUser.email = "sharad@chatgpt.com"
// Object.freeze(jsUser) //Fixed the object after that not changing on Object
jsUser.email = "ritz@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello ! JS user");    
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.Location}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





