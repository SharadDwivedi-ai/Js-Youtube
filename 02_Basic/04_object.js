// Singleton
// const tinderUser = new Object() //This is singleton object 

const tinderUser = {}
tinderUser.id = "131313"
tinderUser.name = "Jony"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));//Ask the property from object





const regularUser = {
    email: "some@gmail.com",
    fullName :{
        userFullName : {
            firstName : "Sharad",
            lastName : "Dwived"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);





