"use strict";
// ARRAYS, TUPLES, ENUMS
// ARRAYS
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];
// TUPLES
// define a tuple type
let hat = ["Hat", 100];
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
// ENUMS
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
let products = [Product.Hat, Product.Gloves];
// using string in enum
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
})(City || (City = {}));
let city = City.London;
//# sourceMappingURL=index.js.map