interface Person {
    name: string;
    getDetails(): string;
}
declare class Employee implements Person {
    id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
