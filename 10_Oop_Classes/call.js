function SetUserName (username){
    // Complex DB calls
    this.username = username
}

function createUser (username, email, password){
    SetUserName.call(this, username)           //.call store/hold the reference of function SetUserName
    this.email = email                         //this word hold the reference of function SetUserName
    this.password = password
}

const chai = new createUser('Code', 'Code@fb.com', '123')
console.log(chai);
