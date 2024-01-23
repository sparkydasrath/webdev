declare class Employee {
    id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare class Employee2 {
    #private;
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
