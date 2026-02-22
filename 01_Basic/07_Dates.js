// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Show Day and date (Sun Feb 22 2026)
// console.log(myDate.toISOString());//2026-02-22T17:10:50.879Z
// console.log(myDate.toJSON());//2026-02-22T17:10:50.879Z
//console.log(myDate.toLocaleDateString());//2/22/2026
//console.log(myDate.toLocaleString());//2/22/2026, 5:13:47 PM
// console.log(myDate.toLocaleTimeString());//5:14:22 PM
// console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 10, 1)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 10, 1, 18, 0)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-10-01")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("1-11-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay()+1);

newDate.toLocaleString('default',{
    weekday : "long", 
    timeZone : "IST",
})

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    timeZone : "Asia/Kolkata",
}));


