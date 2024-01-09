"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    userName;
    todoItems;
    nextId = 1;
    constructor(userName, todoItems) {
        this.userName = userName;
        this.todoItems = todoItems;
    }
    addTodoItem(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task, false));
        return this.nextId;
    }
    getTodoById(nextId) {
        return this.todoItems.find(item => item.id === nextId);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
