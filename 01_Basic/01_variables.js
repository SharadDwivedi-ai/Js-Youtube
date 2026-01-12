const accountId = 144553
let accountEmail = "sharad@google.com"
var accountPassword = "12345"
accountCity = "Sultanpur"
let accountState; 

// accountId = 2 //Not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use Var
Because of issue in block scope and functional scope. 

*/
console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
