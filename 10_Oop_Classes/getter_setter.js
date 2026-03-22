class User{
    constructor(email, password){
        this.email = email, 
        this.password = password
    }
    get email(){                                  //getter
        return this._email.toUpperCase()
    }
    set email(value){                             //setter
        this._email = value
    }


    get password(){                            //getter
        // return this._password.toUpperCase()
         return `${this._password}microsoft`
    }
    set password(value){                       //setter
        this._password = value
    }
}

const code = new User('_code@ai', 'abc@123')
console.log(code.password);
console.log(code.email);

