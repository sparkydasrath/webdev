"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const TodoCollection_1 = require("./TodoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Nobody", true)
];
let collection = new TodoCollection_1.TodoCollection("Sparky", todos);
console.clear();
// console.log(`${collection.userName}'s Todo List`);
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
/* let newId: number = collection.addTodoItem("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);
todoItem?.printDetails();
*/
// print all the items
//collection.getTodoItems(true).forEach(item => item.printDetails());
// clear competed tasks
//collection.removeComplete();
// print all the items
collection.getTodoItems(true).forEach(item => item.printDetails());
