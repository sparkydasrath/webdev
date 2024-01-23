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
/* 
class Employee {
    public id: string;
    public name: string;
    private dept: string;
    public city: string;

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

// DEFINE & ASSIGN CONSTRUCTOR PARAMETERS
// VERBOSE CONSTRUCTOR PARAMETERS
class Employee2 {
    public id: string;
    public name: string;
    #dept: string;
    public city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.#dept = dept;
        this.city = city;
    }
}

//  BETTER
class Person {
    constructor(public id: string, public name: string,
        public city: string) { }
}
class Employee3 extends Person {
    constructor(public readonly id: string, public name: string,
        private dept: string, public city: string) {
        super(id, name, city);
    }
} */

// INTERFACES
interface Person {
    name: string;
    getDetails(): string;
}

class Employee implements Person {
    constructor(public id: string, public name: string,
        private dept: string, public city: string) { }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}