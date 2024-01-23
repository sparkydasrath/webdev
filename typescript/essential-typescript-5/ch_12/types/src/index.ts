// GENERICS

import { Person, Product } from "./dataTypes.js";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

[...people, ...products].forEach(item =>
    console.log(`Item: ${item.name}`));

class DataCollection<T extends (Person | Product)> {
    private items: T[] = [];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
    getNames(): string[] {
        return this.items.map(item => item.name);
    }
}

class DataCollection2<T extends { name: string }> {
    private items: T[] = [];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
}

class SearchableCollection extends DataCollection2<Employee> {
    constructor(initialItems: Employee[]) {
        super(initialItems);
    }
    find(searchTerm: string): Employee[] {
        return this.items.filter(item =>
            item.name === searchTerm || item.role === searchTerm);
    }
}