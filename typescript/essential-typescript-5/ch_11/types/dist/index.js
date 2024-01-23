"use strict";
// CLASSES & INTERFACES
/* type Person = {
    id: string,
    name: string,
    city: string
};

// USING CONSTRUCTOR FUNCTIONS
type Employee = {
    id: string,
    name: string,
    dept: string,
    city: string,
    writeDept: () => void
};

let Employee = function (id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
}
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
 */
// USING CLASSES
/* type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    id: string;
    name: string;
    dept: string;
    city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

let data: (Person | Employee)[] =
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
        salesEmployee];

data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
}); */
// ACCESS CONTROL
class Employee {
    id;
    name;
    dept;
    city;
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
class Employee2 {
    id;
    name;
    #dept;
    city;
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.#dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.#dept}`);
    }
}
//# sourceMappingURL=index.js.map