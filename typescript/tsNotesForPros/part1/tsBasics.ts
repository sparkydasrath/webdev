

// obj
console.log("\nOBJECT LITERAL");
let myObj: { name: string, age: number };
myObj = { name: "myName", age: 1 };
console.log(myObj);


// dict
console.log("\nDICTIONARY");
let dict: { [key: string]: number } = {}
dict["key1"] = 1;
dict["key2"] = 2;
console.log(dict);

//enum
console.log("\nENUMS");
enum Colors { Red = 0, Blue, Green };
console.log("enum access ", Colors.Red);
console.log("enum index ", Colors[0]);

//intersection types: combines the member of two or more types
console.log("\nINTERSECTION TYPES");

interface Knife {
    cut(): void
}

interface BottleOpener {
    openBottle(): void;
}

interface ScrewDriver {
    turnScrew(): void;
}


interface Hammer {
    hit(): void;
}

class ToolClass implements Hammer {
    hit(): void {
        console.log("Hit it like a hammer")
    }

}

let mytc = new ToolClass();
console.log("trying to hit with hammer");
mytc.hit();

// type SwissArmyKnife = Knife & BottleOpener & ScrewDriver;

// function use(tool: SwissArmyKnife) {
//     console.log("\ndoing lots of things from one type")
//     tool.cut();
//     tool.openBottle();
//     tool.turnScrew();
// }

//arrays - using find
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

console.log("\ntesting arrays ");
//console.log(inventory.find(i => i.name === "apples"));

// enums
enum SourceEnum {
    value1 = <any>'value1',
    value2 = <any>'value2'
}
enum AdditionToSourceEnum {
    value3 = <any>'value3',
    value4 = <any>'value4'
}

type TestEnumType = SourceEnum | AdditionToSourceEnum;
let TestEnum = { ...SourceEnum, ...AdditionToSourceEnum };

function check(t: TestEnumType) {
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
// commented to not have variable clash in tsbasics2
// class Car {
//     public position: number = 0;
//     private _speed: number = 43;
//     private _MAX_SPEED = 100;

//     move(): void {
//         this.position += this._speed;
//     }

//     get speed(): number {
//         return this._speed;
//     }

//     set speed(value: number) {
//         this._speed = Math.min(value, this._MAX_SPEED);
//     }
// }

// let car = new Car();
// car.speed = 120;
// console.log("car speed = ", car.speed);

// console.log("\n CLASS DECORATOR \n");
// function addMetadata(target: any) {
//     target.__customMetadata = {
//         someKey: "someValue"
//     }

//     return target;
// }

// console.log("\n defining Person class")
// @addMetadata
// class Person {
//     public constructor(private name: string) {
//     }
//     public greet() {
//         return this.name;
//     }
// }

// function getMetadataFromClass(target: any) {
//     return target.__customMetadata;
// }

// console.log(getMetadataFromClass(Person));

// function getMetadataFromInstance(target: any) {
//     return target.constructor.__customMetadata;
// }
// let person1 = new Person("John");
// let person2 = new Person("Lisa");
// console.log(getMetadataFromInstance(person1));
// console.log(getMetadataFromInstance(person2));