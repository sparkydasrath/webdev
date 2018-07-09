console.log("\n INTERFACES \n");

interface IPerson {
    name: string;
    age: number;
    breath(): void;
}

interface IManager extends IPerson {
    mangerId: number;
    managePeople(perople: IPerson[]): void;
}

console.log("\n GENERIC INTERFACES \n");
interface IStatus<U> {
    code: U;
}

interface IEvents<T> {
    list: T[];
    emit(event: T): void;
    getAll(): T[];
}

class State<T> implements IEvents<T> {
    emit(event: T): void {
        this.list.push(event);
    }
    getAll(): T[] {
        return this.list;
    }
    list: T[];
    constructor() {
        this.list = [];
    }
}

const s = new State<IStatus<number>>();
s.emit({ code: 200 });
// s.emit({ code: "400" });