// if condition 
// <,>,<=,>=,==,!=, ===
// if (true){
//   condition true then code execute 
// }
// if (false){
//  condition false then code not execute 
// }

// const isUserLoggedin = true
// if(2 ==="2"){
//     console.log("Excuted");
// }else{
//     console.log("Not executed");
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000
// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"), console.log("test2"); Not follow this type of coding

// Logical operator

const userLoggedIn = true
const debitCard = true 
const loggedFromGoogle = false
const loggedFromEmail = true
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedFromGoogle || loggedFromEmail){
    console.log("User Logged In");    
}
 


