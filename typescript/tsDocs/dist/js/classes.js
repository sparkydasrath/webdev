"use strict";
//ex1: Greeter
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}
let g = new Greeter("world");
console.log(g.greet());
//ex 2: Animal
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("woooof");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
