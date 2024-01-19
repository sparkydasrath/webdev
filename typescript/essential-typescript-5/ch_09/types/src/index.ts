// ARRAYS, TUPLES, ENUMS

// ARRAYS
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices: number[] = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];

// TUPLES
// define a tuple type
let hat: [string, number] = ["Hat", 100];

hat.forEach((h: string | number) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    } else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});

// ENUMS
enum Product {
    Hat,
    Gloves,
    Umbrella
}

let products: Product[] = [Product.Hat, Product.Gloves];

// using string in enum
enum City { London = "London", Paris = "Paris", NY = "New York" }
console.log(`City: ${City.London}`); // City: London


// TYPE ALIASES
type cities = "London" | "Paris" | "New York";
let city: cities = "London";
console.log(`City: ${city}`); // City: London