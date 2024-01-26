import { Sport, SportsProduct } from "./product.js";
import { Cart } from "./cart.js";
// adding JS
import { sizeFormatter, costFormatter } from "./formatters.js";
let kayak = new SportsProduct(1, "Kayak", 275, Sport.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, Sport.Running, Sport.Watersports);
let ball = new SportsProduct(3, "SoccerBall", 19.50, Sport.Soccer);
let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
/* console.log(`Cart has ${cart.itemCount} items`);
console.log(`Cart value is $${cart.totalPrice.toFixed(2)}`); */
// adding JS
sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", cart.totalPrice);
