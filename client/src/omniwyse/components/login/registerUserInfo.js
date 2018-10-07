import { LoginInfo } from "./loginInfo";

export class RegisterUserInfo extends LoginInfo {

    constructor(){
        super();
        this._mobile = null;
    }

    set mobile(value) {
        this._mobile = value;
    }

    get mobile() {
        return this._mobile;
    }
}

