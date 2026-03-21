// fetch('https://something.com').then().catch().finally()
// new keyboard shows a new object

// Frist syntex for write promise
const promiseOne = new Promise(function(resolve, reject){  //new promise object create
// Do an async task
// DB calls, cryptography, network call
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
}, 1000);
})   
promiseOne.then(function(){
    console.log('Promise Consumed');
})

// // Second syntex for write promise
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async task 2 ');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Promise 2 resolved');
})

// Promise 3 
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
    resolve({username:"code", email:"code@example.com"})    
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// Promise 4 
const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
      let error = false; 
      if(!error){
        resolve({username:"js", password:"123"})
      } else{
        reject('Error: Something went wrong')
      }
    },2000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username    
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolve or rejected");
})

// Promise 5 - using async await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'JsPromise', password: "54321" })
        } else {
            reject('Error: 404')
        }
    }, 2000)
})
async function consumePromiseFive() {          //try catch
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);   
    }

}
consumePromiseFive()

// Promise 6 : fetch api from try-catch and then-catch
//Try-catch
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()
//then catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()

})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))