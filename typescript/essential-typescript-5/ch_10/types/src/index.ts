// OBJECTS

// literal object
/* let hat = { "name": "Hat", "price": 100 };
let gloves = { "name": "Gloves", "price": 75 };
let umbrella = { "name": "Umbrella" };

let products: { name: string, price: number }[] = [hat, gloves, umbrella];
products.forEach((prod) => console.log(`${prod.name}: ${prod.price}`)); */

// optional properties
/* let hat = { "name": "Hat", "price": 100 };
let gloves = { "name": "Gloves", "price": 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };

let products: { name: string, price?: number, waterproof?: boolean }[]
    = [hat, gloves, umbrella]; */

// including methods in shape types
/* 
enum Feature { Waterproof, Insulated }

let hat = { "name": "Hat", "price": 100 };
let gloves = { "name": "Gloves", "price": 75 };
let umbrella = { name: "Umbrella", price: 30, 
    hasFeature:(feature: Feature) => feature === Feature.Waterproof };

let products: { name: string, price?: number, 
    hasFeature?(feature:Feature):boolean }[]
    = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `Waterproof: ${prod.hasFeature(Feature.Waterproof)}`)); */

// USING TYPE SHAPE UNIONS
/* type Product = {
    id: number,
    name: string,
    price?: number,
}

type Person = {
    id: string,
    name: string,
    city: string,
}



let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
//let bob = { id: "bsmith", name: "Bob", city: "London" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
dataItems.forEach(item =>
    console.log(`ID: ${item.id}, Name: ${item.name}`));

// USING TYPE GUARD
dataItems.forEach(item =>
    console.log(`ID: ${item.id}, Type: ${typeof item}`));

// USING TYPE GUARD with IN keyword
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}: ${item.city}`);
    } else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined;
}

// USING TYPE GUARD WITH CUSTOM FUNCTION
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`);
    } else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
}); */

// USING TYPE INTERSECTION
type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    company: string,
    dept: string
};
let bob = {
    id: "bsmith", name: "Bob", city: "London",
    company: "Acme Co", dept: "Sales"
};
let dataItems: (Person & Employee)[] = [bob];