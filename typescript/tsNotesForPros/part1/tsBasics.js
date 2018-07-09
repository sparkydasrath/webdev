var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// obj
console.log("\nOBJECT LITERAL");
let myObj;
myObj = { name: "myName", age: 1 };
console.log(myObj);
// dict
console.log("\nDICTIONARY");
let dict = {};
dict["key1"] = 1;
dict["key2"] = 2;
console.log(dict);
//enum
console.log("\nENUMS");
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
;
console.log("enum access ", Colors.Red);
console.log("enum index ", Colors[0]);
//intersection types: combines the member of two or more types
console.log("\nINTERSECTION TYPES");
function use(tool) {
    console.log("\ndoing lots of things from one type");
    tool.cut();
    tool.openBottle();
    tool.turnScrew();
}
//arrays - using find
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];
console.log("\ntesting arrays ");
//console.log(inventory.find(i => i.name === "apples"));
// enums
var SourceEnum;
(function (SourceEnum) {
    SourceEnum[SourceEnum["value1"] = 'value1'] = "value1";
    SourceEnum[SourceEnum["value2"] = 'value2'] = "value2";
})(SourceEnum || (SourceEnum = {}));
var AdditionToSourceEnum;
(function (AdditionToSourceEnum) {
    AdditionToSourceEnum[AdditionToSourceEnum["value3"] = 'value3'] = "value3";
    AdditionToSourceEnum[AdditionToSourceEnum["value4"] = 'value4'] = "value4";
})(AdditionToSourceEnum || (AdditionToSourceEnum = {}));
let TestEnum = Object.assign({}, SourceEnum, AdditionToSourceEnum);
function check(t) {
    return t === TestEnum.value1;
}
console.log("\ntesting enum :", check(TestEnum.value2));
//classes
console.log("\nCLASSES\n");
//basic inheritance
// class Car {
//     public position: number = 0;
//     protected speed: number = 42;
//     move(): void {
//         this.position += this.speed;
//         console.log("car new position = ", this.position)
//     }
// }
// class SelfDrivingCar extends Car {
//     move(): void {
//         super.move();
//         super.move();
//     }
// }
// let myCar = new Car();
// console.log("car is moving: ", myCar.move());
// let mySc = new SelfDrivingCar();
// console.log("self driving car is moving: ", mySc.move());
/* accessors */
class Car {
    constructor() {
        this.position = 0;
        this._speed = 43;
        this._MAX_SPEED = 100;
    }
    move() {
        this.position += this._speed;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = Math.min(value, this._MAX_SPEED);
    }
}
let car = new Car();
car.speed = 120;
console.log("car speed = ", car.speed);
console.log("\n CLASS DECORATOR \n");
function addMetadata(target) {
    target.__customMetadata = {
        someKey: "someValue"
    };
    return target;
}
console.log("\n defining Person class");
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return this.name;
    }
};
Person = __decorate([
    addMetadata
], Person);
function getMetadataFromClass(target) {
    return target.__customMetadata;
}
console.log(getMetadataFromClass(Person));
function getMetadataFromInstance(target) {
    return target.constructor.__customMetadata;
}
let person1 = new Person("John");
let person2 = new Person("Lisa");
console.log(getMetadataFromInstance(person1));
console.log(getMetadataFromInstance(person2));
