// ADVANCED GENERICS
import { Product, Employee } from './dataTypes.js';
let myVar = "name";
myVar = "price";
//myVar = "someOtherName"; // Error
function getValue(item, keyname) {
    console.log(`Value: ${item[keyname]}`);
}
let p = new Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");
let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
//# sourceMappingURL=index.js.map