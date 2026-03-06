// const myNum = [1,2,3]

// myTotal = myNum.reduce(function(acc, cur){
//     console.log(`Acc: ${acc} and Currval : ${cur}`);
//     return acc + cur
// }, 3)

// const myTotal = myNum.reduce((acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shopCart = [
    {
        itemName: 'Js course',
        price: 22160
    },
    {
        itemName: 'PHP course',
        price: 11199
    },
    {
        itemName: 'Java course',
        price: 26460
    },
    {
        itemName: '.Net course',
        price: 9999
    }
]
const myCart= shopCart.reduce((acc, item)=> acc + item.price, 0)
console.log(myCart);

