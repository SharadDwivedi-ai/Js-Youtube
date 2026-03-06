const lang= ["js", "react", "css", "html", "bootstrap"]

// Simple method for understanding
// lang.forEach( function(val){
//     console.log(val);    
// } )

// lang.forEach((item)=>{console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// lang.forEach(printMe)


// use for print array value, index and complete array
// lang.forEach((item, index, arr)=>{
//     console.log(item, index, arr); 
// })


// array object declaration 
const myCOding = [
    {langName: "Javascript",
      fileName: "JS"   
    },
     {langName: "Java",
      fileName: "Java"   
    },
     {langName: ".Net",
      fileName: ".N"   
    },
     {langName: "PHP",
      fileName: "P"   
    },
]

myCOding.forEach((item)=>{
    // console.log(item.fileName);
    console.log(item.langName);
})