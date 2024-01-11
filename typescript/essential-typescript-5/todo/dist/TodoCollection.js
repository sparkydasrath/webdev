"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
// v1 before using map
/*
 export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, public todoItems: TodoItem[]) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodoItem(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task, false));

        return this.nextId;
    }
    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);

    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
 */
// v2 using map
/* export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, public todoItems: TodoItem[]) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodoItem(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        // v1
        // this.todoItems.push(new TodoItem(this.nextId, task, false));

        // v2
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id: number): TodoItem {
        // v1
        //return this.todoItems.find(item => item.id === id);

        // v2 use map to get the item
        return this.itemMap.get(id);

    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
} */
// v3 add getTodoItems() to display a list of items optionally filtered to exclude completed tasks
class TodoCollection {
    userName;
    todoItems;
    nextId = 1;
    itemMap = new Map();
    constructor(userName, todoItems) {
        this.userName = userName;
        this.todoItems = todoItems;
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodoItem(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
}
exports.TodoCollection = TodoCollection;
