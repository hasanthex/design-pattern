class UserManager {

    #first_name;
    #last_name;
    #user;

    constructor(first_name, last_name){
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#createUser();
    }

    #createUser(){
        this.#user = {
            "first_name": this.#first_name,
            "last_name": this.#last_name,
            "created_at": Date.now(),
            "is_auth": true
        }
    }

    getFirstName(){
        return this.#first_name;
    }

    getLastName(){
        return this.#last_name;
    }

    getUser(){
        return this.#user;
    }

    isAuthenticate(){
        return this.#user.is_auth;
    }
}

const user1 = new UserManager("Mr.", "Doo");
const user2 = new UserManager("Mr.", "Foo");

console.log( user1.getFirstName() );
console.log( user1.getLastName() );
console.log( user1.getUser() );
