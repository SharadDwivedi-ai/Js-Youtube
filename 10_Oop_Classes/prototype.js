// Create a method to find the all string true length
let myName = "Sharad          "
let myChannel = "Code        "
// console.log(myName.trueLength);
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); 
}
myName.trueLength()
myChannel.trueLength()


// No upper Prototype on Object

let myHeros = ['Ram', 'Krishna', 'Shiv']
let herosPower = {
    Ram : 'Dhanush',
    Krishna : 'Chakra',
    Shiv : 'Trisul'
}

Object.prototype.God = function(){
    console.log(`God is present all over world`);
}
Array.prototype.son = function(){
    console.log(`Hello God !`);
}
// myHeros.God()
// herosPower.God()
// myHeros.son()
// herosPower.son()

// Inheritance 

const user = {
    name: "code",
    email:"code@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
} 
Teacher.__proto__= user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

