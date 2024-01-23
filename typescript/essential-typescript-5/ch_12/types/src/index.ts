// GENERICS

import { Person, Product } from "./dataTypes.js";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

[...people, ...products].forEach(item =>
    console.log(`Item: ${item.name}`));

class DataCollection<T> {
    private items: T[] = [];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
    add(newItem: T) {
        this.items.push(newItem);
    }
    getItem(index: number): T {
        return this.items[index];
    }
}