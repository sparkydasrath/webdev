"use strict";
// classic definiton of a class in TypeScript that mirrors c#
/* export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    public printDetails(): void {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
} */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
// shorthand version of the same class definition that uses pure TypeScript
class TodoItem {
    id;
    task;
    complete;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    // the public keyword is optional in TypeScript
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
