export class Order {

    constructor(){
        this._delivery_type = null;
        this._due           = '';
        this._paid          = '';
        this._total_amount  = 0;
        this._status_id     = 0;
        this._email         = '';
        this._order_date    = null;
        this._delivery_time = null;
    }

    set delivery_type(value) {
        this._delivery_type = value;
    }

    get delivery_type() {
        return this._delivery_type;
    }

    set due(value){
        this._due = value;
    }

    get due() {
        return this._due;
    }

    set paid(value){
        this._paid = value;
    }

    get paid() {
        return this._paid;
    }
    set total_amount(value){
        this._total_amount = value;
    }

    get total_amount() {
        return this._total_amount;
    }

    set status_id(value){
        this._status_id = value;
    }

    get status_id() {
        return this._status_id;
    }
    set email(value){
        this._email = value;
    }

    get email() {
        return this._email;
    }
    set order_date(value){
        this._order_date = value;
    }

    get order_date() {
        return this._order_date;
    }
    set delivery_time(value){
        this._delivery_time = value;
    }

    get delivery_time() {
        return this._delivery_time;
    }

}

