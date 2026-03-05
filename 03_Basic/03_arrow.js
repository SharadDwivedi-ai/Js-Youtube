// const user = {
//     username: "Sharad", 
//     price: 999, 
//     welcomeMessge:function(){
//         console.log(`${this.username}, Welcome to website`);        
//         console.log(this);
//     }
// }
// user.welcomeMessge()
// user.username = "Sambhu"
// user.welcomeMessge()
// console.log(this);


// function sutta(){
//     let username = "sharad"
//     console.log(this.username);   //undefined
// }
// sutta()

// const sutta = function(){
//     let username = "sharad"
//     console.log(this.username);   //undefined
// }
// sutta()

// Arrow function
// const sutta =() =>{
//     let username = "sharad"
//     console.log(this.username);   //undefined
//     console.log(this); //{}
// }
// sutta()

// const addTwo = (num1, num2) =>{      //Explicit return arrow function
//     return num1+num2
// }
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => num1+num2  //Implicit return arrow function 
// or
// const addTwo = (num1, num2) => (num1+num2) 

// const addTwo = (num1, num2)=> ({username: "Sharad"})
// console.log(addTwo(1,2));

// const myArray = [2,3,5,7,6,2]
// myArray.forEach(() => {})

