class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User Name is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)       //Call the parent class by using super keyword
        this.email = email,
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const code = new Teacher('Code', 'code@google.com', '132456')

code.addCourse()
code.logMe()
const jsCode = new User ('JsCode')
jsCode.logMe()

console.log(code === jsCode);

console.log(code === Teacher);

console.log(code instanceof Teacher);

console.log(code instanceof User);



