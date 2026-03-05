function myName(){
console.log("S");
console.log("h");
console.log("a");
console.log("r");
console.log("a");
console.log("d");
}
// myName()
// (num1, num2) is a parameter & (3,3) is a arguments

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,3)  //6
// addTwoNumbers(3,"4")  //34
// addTwoNumbers(3,"R") //3R
// addTwoNumbers(3,null)  //

// function addTwoNumbers(num1, num2){
//     // let result= num1 + num2;
//     // return result        //Function rule: After declaring the return no other below lines execute. 
//     return num1+num2  
// }

// const result = addTwoNumbers(3,5)
// console.log("Result : ", result);

function loginUserMessage(userName="ritz"){
    // if(userName === undefined){
    //  console.log("Please enter a username");
    //  return   
    // }
      if(!userName){
     console.log("Please enter a username");
     return   
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Sharad"))
// console.log(loginUserMessage()); //undefined
console.log(loginUserMessage("Madhav"));
