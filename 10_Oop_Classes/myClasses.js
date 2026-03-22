// After ES6

class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }
    encryptPassword() {
        return `${this.password} abc`
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const code = new User('Code', 'Code@microsoft.com', '123')
console.log(code.encryptPassword());
console.log(code.changeUserName());

// Behind the scene
function User(username, email, password) {
    this.username = username,
        this.email = email,
        this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.password} abc`
}
User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}
const program = new User('Program', 'program@microsoft.com', '123')
console.log(program.encryptPassword());
console.log(program.changeUserName());