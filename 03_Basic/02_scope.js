// var a=300

// let a= 13
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     // console.log("Inner value of a : ", a);
    
// }

// console.log(a); //Block scope
// console.log(b); //Block scope 
// console.log(a); //global scope
 

// Nested scope 
// function one(){
//     const username = "Sharad"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// if (true){
//     const username = "Madhav";
//     if(username === "Madhav"){
//         const add = " Sultanput";
//         console.log(username + add);
        
//     }
//     // console.log(add);
// } 
// console.log(username);


// -------------interesting case --------------
console.log(addOne(5))

function addOne(num){
  return num+1
}

const addTwo = function (num){
    return num + 2 
}
addTwo(5)