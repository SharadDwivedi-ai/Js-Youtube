// Immediately Invoked Function Expressions (IIFE) : Global variable makes pollution on scope then protect from this pollution using the IIFE.  
(function chai(){
    // Name IIFE
    console.log('DB Connected');
})();               // (;) required to stop the IIFE

(()=>{
    //Unnamed IIFE
console.log('DB Connected Two');
})();

((name)=>{
console.log(`DB Connected Two ${name}`);
})('Sharad')