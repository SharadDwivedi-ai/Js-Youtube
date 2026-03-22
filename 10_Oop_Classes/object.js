// Function is a function and also a object 
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser (username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function (){
    this.score++                                      //This mean jis ne bulaya
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}
const chai = new createUser("chai", 25) 
const tea = new createUser("tea", 250)

chai.printMe();
