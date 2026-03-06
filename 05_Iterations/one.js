// For loop 

// Print numbers
// for (let i=1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// Print the table 
// for (let i = 1; i <=10; i++) {
//     console.log(`Table : ${i}`);
//     for (let j = 1; j <=10; j++) {
//       console.log(i +'*'+j+ ' = '+ i*j);
//     }
// }

// For loop on Array
// let myArray = ["Flash", "Batman", "Supmerman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue
// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(i);
// }

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(i);
}