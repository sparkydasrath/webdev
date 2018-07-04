class User {
    private name: string;
    private email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User created: ", +this.name);
    }

    register() {
        console.log(this.name + " is now registered");
    }

}

let j = new User("John", "j@g.com", 1);

console.log(j);


class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
        console.log("Member id = " + this.id + " for " + name);
    }
}

let k = new User("KJohn", "j@g.com", 2);

console.log(k);

let m = new Member(123, "KKK", "KK@gg.com", 1111);