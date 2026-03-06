// For of Loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello Developer!"
// for (const greet of greeting) {
//     console.log(`Each charactor of ${greet}`);
// }

// Maps : declared the unique value and follow the writing sequence of code while execution
// const map = new Map()
// map.set('In', "India")
// map.set("FR", "France")
// map.set("RS", "Russia")
// console.log(map);

// for(const key of map){
//     console.log(key);   
// }
// for(const [key, value] of map){
//     console.log(`${key} > ${value}`);   
// }

// This method not working on object 
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(`${key} = ${value}`);  
// }

// for in loop
const myObject = {
    js: "JavaScript",
    cpp: "C++"
}
// for (const key in myObject) {    
//     // console.log(key);
//     // console.log(myObject[key]);
//     console.log(`${key} shotcut is for ${myObject[key]}`);
// }

const course = ["Java", "JavaScript", ".Net", "PHP"]
for (const key in course) {
   console.log(`${key} = ${course[key]}`);
   
}