"use strict";
// OBJECTS
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
// USING TYPE GUARD
dataItems.forEach(item => console.log(`ID: ${item.id}, Type: ${typeof item}`));
//# sourceMappingURL=index.js.map