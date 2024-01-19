declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let prices: number[];
declare let names: string[];
declare let hat: [string, number];
declare enum Product {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
declare let products: Product[];
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare let city: City;
