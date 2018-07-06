//ex1: Greeter

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello " + this.greeting;
//     }
// }

// let g = new Greeter("world");

// console.log(g.greet());

//ex 2: Animal

// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("woooof");
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// ex3: accessors
let passcode = "secret";
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode === "secret") {
            this._fullName = newName;
        }
        else {
            console.log("Yeahhn...nopo");

        }
    }

    
    
}


let employee = new Employee();
employee.fullName = "blah blah";

