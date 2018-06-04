'use strict'
// CREATING OBJECTS
// Each of the following options will create a new empty object:
 
var newObject1 = {};
 
// or
var newObject2 = Object.create( Object.prototype );
 
// or
var newObject3 = new Object();

// BASIC CONSTRUCTOR
function Car(model, year, miles)
{
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = () => this.model + " has done " + this.miles + " miles";
}

//invoking instances
var civic = new Car("civic", 2000, 5000);

console.log(civic.toString());

// CONSTRUCTOR with PROTOTYPE
// the issue is that toString is being redefined with each new instance of car

function Car2(model, year, miles){
    this.model=model;
    this.year = year;
    this.miles = miles;
}

Car2.prototype.toString = () => this.model + " has done " + this.miles + " miles";

var civic2 =  new Car("civic2", 1999, 1000);

console.log(civic2.toString());