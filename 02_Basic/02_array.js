const marvel_heros = ["IronMan","Thor","Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //Array treated second array as a data 

// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros= [...marvel_heros, ...dc_heros]//spread operator
// console.log(all_new_heros);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Sambhu Dubey"));
// console.log(Array.from("Sambhu Dubey"));
console.log(Array.from({name: "Sambhu"})); //interesting situation

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));


