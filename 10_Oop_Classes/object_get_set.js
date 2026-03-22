const User = {
    _email: 's@openai.com',
    _password:'Open@ai',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value     
    }
}
const code = Object.create(User)
console.log(code.email);
