export class LoginInfo {

    constructor(){
        this._username = null;
        this._password = null;
        this._email    = null;
    }

    set username(value) {
        this._username = value;
    }

    get username() {
        return this._username;
    }

    set email(value){
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set password(value){
        this._password = value;
    }

    get password() {
        return this._password;
    }
}

