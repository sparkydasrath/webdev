import { TodoItem } from "./todoItem.js";


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
// v4 add getItemCounts() and type that describes the items in the collection.

type ItemCounts = {
    total: number,
    incomplete: number
}

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

        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);

    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }

    markComplete(id: number, complete: boolean) {
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
        })
    }

    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }

    }
} */

// v4 adding persistence
export class TodoCollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, public todoItems: TodoItem[]) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodoItem(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);

    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }

    markComplete(id: number, complete: boolean) {
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
        })
    }

    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }

    }
}
