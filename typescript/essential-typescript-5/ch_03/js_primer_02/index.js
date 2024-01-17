/* JS PRIMER 02 */

/*
let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};


// constructor function
let Product = function (name, price) {
    this.name = name;
    this.price = price;
};

// prototype
Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let myHat = new Product("Hat", 100);
console.log(myHat.toString());
*/

/*
// JavaScript Classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

// extending classes
class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

console.log(TaxedProduct.process(new TaxedProduct("Hat", 100))); // toString: Name: Hat, Price: 100

*/

/*
// Iterators & Generators
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

function* createProductIterator() {
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}

let iterator = createProductIterator();
let result = iterator.next();

while (!result.done) {
    console.log(result.value.toString()); // toString: Name: Hat, Price: 100
    result = iterator.next(); // toString: Name: Boots, Price: 100
}
*/

// Collections
