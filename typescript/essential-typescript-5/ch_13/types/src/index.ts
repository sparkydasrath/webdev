// ADVANCED GENERICS

import { City, Person, Product, Employee } from './dataTypes.js';

/* let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type shapeType = { name: string }
class Collection<T extends shapeType>{
    private items: Set<T>;
    constructor(initialItems: T[] = []) {
        this.items = new Set<T>(initialItems);
     }
    get(name: string): T {
        return [...this.items.values()].find(item => item.name === name);
    }
} */

// Using the index type query

type myVar2 = keyof Product; // 'name' | 'price'
let myVar: keyof Product = "name";
myVar = "price";
//myVar = "someOtherName"; // Error

function getValue<T, K extends keyof T>(item: T, keyname: K): void {
    console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");