"use strict";
// GENERICS
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));
//# sourceMappingURL=index.js.map