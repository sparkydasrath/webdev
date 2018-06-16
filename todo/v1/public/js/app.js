"use strict";

/* BAD: create a montonically increasing global variable to store the id 
    each time the app is run, the list will start at 0 since no storage is involved in this version
*/ 

let itemId = -1;

window.onload = e => {console.log("window loaded " + e)}

// cache dom elements
let addTodoButton = document.getElementById("add-todo");
let deleteTodoButton = document.getElementById("delete-todo");
let inputTextbox = document.getElementById("input-text");
let listItems = document.getElementById("list-items");
let diag = document.getElementById("diag");

// object to represent each toditem
// use constructor function to pass along an id and the text on creation
function TodoItem(id, todoText) {
    this.id = id;
    this.todoText = todoText;
    this.isCompleted = false;

    this.toString = function () {
        return this.todoText;
    }
}

function createTodoItem(id, text) {
    return new TodoItem(id, text);
}

function getTodoText() {
    return inputTextbox.value;
}

// event handlers
addTodoButton.addEventListener("click", handleAddTodoButtonOnClick);

// basic top level list of todos
let todoList = [];


function handleAddTodoButtonOnClick(eventArgs) {

    // increment the counter
    // by virtue of this design, each id will match the correct index in the array used to store items, so deleting will be simple
    itemId++; 

    let todoItemToAdd = createTodoItem(itemId, getTodoText());
    todoList.push(todoItemToAdd);

    listItems.innerHTML = "";
    listItems.innerHTML = displayListItems(todoList);
}

function displayListItems(listToShow) {
    let result = "";
    listToShow.forEach(element => {
        let val = element.toString();
        result += val;
    });
    return result;
}