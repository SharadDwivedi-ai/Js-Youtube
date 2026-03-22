const user = {
    username: "Learner",
    loginCount: 8,
    signedIn: true, 
    getUserdetails: function(){
        console.log("User Name: ", this.username); 
    }
}
// console.log(user.username);
// console.log(user.getUserdetails());

// constructor function 
// const promiseOne = new Promise()
// const date = new Date() 
function User(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount; 
    this.isLoggedIn = isLoggedIn;
    return this              //This is implicitly available
}
const userOne = new User("Project", 12, true)
const userTwo = new User("Learn", 15, false)
console.log(userOne);
console.log(userTwo);

// After using New keyword create empty object, it is called instance. 




