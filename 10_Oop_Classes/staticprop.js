class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const sharad = new User('Sharad')
// console.log(sharad.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const onePlus = new Teacher('onePlus','one@onePlus.com')
onePlus.logMe();


