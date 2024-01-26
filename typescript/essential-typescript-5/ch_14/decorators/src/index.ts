import { City } from './city.js';
import { Product } from './product.js';

let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

console.log(city.getSummary()); // London has a population of 8982000
console.log(product.getDetails()); // Name: Kayak, Price: $275