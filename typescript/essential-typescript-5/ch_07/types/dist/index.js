"use strict";
function calculateTax(amount) {
    return amount * 1.2;
}
// type inference
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
// using any    
function calculateTax2(amount) {
    return (amount * 1.2).toFixed(2);
}
let price2 = 100;
let taxAmount2 = calculateTax(price);
let halfShare2 = taxAmount / 2;
console.log(`Price: ${price2}`);
console.log(`Full amount in tax: ${taxAmount2}`);
console.log(`Half share: ${halfShare2}`);
//# sourceMappingURL=index.js.map