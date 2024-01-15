// with type conversion
/* let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`); */

// preventing type conversion
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

// use triple = to prevent type conversion
if (hatPrice === bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

/*
// use Number() to convert string to number
let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

// Appreciating the Value of Explicitly Applied Type Coercion
let firstCity;
console.log(`First City: ${typeof firstCity}`);
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);

// Understanding Nullish Coalescing
let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0; // zero-rated for tax
console.log(`Tax rate: ${taxRate || 10}%`);
*/

// Working with functions
// v1 basic sum function
/* function sumPrices(first, second, third) {
    return first + second + third;
}
 */
// v2 using rest operator to take in an array of paramters, 
// the array reduce function and lambda
function sumPrices(...numbers) {
    return numbers.reduce((total, val) => total + val, 0);
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`);// ==> Total Price: 100100undefined

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.splice(4, 2);
console.log(a); // ==> [ 1, 2, 3, 4, 7, 8, 9 ]
console.log(b); // ==> [ 5, 6 ]
console.log(a); // ==> [ 1, 2, 3, 4, 7, 8, 9 ]


let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },
    
    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};

console.log(hat); // ==> { name: 'Hat', _price: 100, priceIncTax: 120 }
hat.price = 120;
console.log(hat); // ==> { name: 'Hat', _price: 120, priceIncTax: 144 }
console.log(hat.writeDetails()); // ==> Hat: 120, 144