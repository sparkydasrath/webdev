import { TodoItem } from "./todoItem";
import { TodoCollection } from "./TodoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Nobody", true)
];

let collection: TodoCollection = new TodoCollection("Sparky", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodoItem("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);


todoItem?.printDetails();