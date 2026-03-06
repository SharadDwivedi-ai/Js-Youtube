const coding = ["js", "java", "php", ".Net"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);
// Output: Undefined - for each not return any value

// const myNums = [1,2,3,4,5] 
// // const newNums = myNums.filter((num)=> num>4)  //Filter return the value by default without scope. If you are using {} scope then return keyword importance for return the value
// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title:'One', genre:'History', publish: 2000, edition: 2015},
    {title:'Two', genre:'science', publish: 2015, edition: 2026},
    {title:'Three', genre:'Chemistry', publish: 2008, edition: 2015},
    {title:'Four', genre:'science', publish: 2018, edition: 2025},
    {title:'Five', genre:'Biology', publish: 2017, edition: 2026}
]

// const favBook = books.filter((bk)=>bk.genre ==  'science')
const userBooks = books.filter((bk)=> bk.publish >=2005 && bk.genre == 'Chemistry')
// console.log(favBook);
console.log(userBooks);



