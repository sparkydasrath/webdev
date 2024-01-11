import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./TodoCollection.js";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Nobody", true)
];

let collection: TodoCollection = new TodoCollection("Sparky", todos);

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
