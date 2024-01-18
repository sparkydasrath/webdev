/*
function calculateTax(amount: number): number {
    return amount * 1.2
}

// type inference
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

// using any
function calculateTax2(amount: number): any {
    return (amount * 1.2).toFixed(2);
}

let price2 = 100;
let taxAmount2 = calculateTax2(price);
let halfShare2 = taxAmount / 2;

console.log(`Price: ${price2}`);
console.log(`Full amount in tax: ${taxAmount2}`);
console.log(`Half share: ${halfShare2}`);
*/
/*
// using type union
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber: string | number = calculateTax(100, false);
let taxString: string | number = calculateTax(100, true);

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
*/

// type assertion
/*
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber = calculateTax(100, false) as number;
let taxString = calculateTax(100, true) as string;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);

*/

// nullable types
function calculateTax(amount: number, format: boolean): string | number {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
