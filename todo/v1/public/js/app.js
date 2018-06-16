"use strict";

/* BAD: create a montonically increasing global variable to store the id 
    each time the app is run, the list will start at 0 since no storage is involved in this version
*/

let itemId = -1;

// basic top level list of todos
let todoList = [];

// =================================================================

// cache dom elements
let addTodoButton = document.getElementById("add-todo");
let deleteTodoButton = document.getElementById("delete-todo");
let inputTextbox = document.getElementById("input-text");
let listItems = document.getElementById("list-items");
let diag = document.getElementById("diag");

subscribeToEvents();

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

function createHtmlElementForTodoItem(todoItem) {
    // div to hold todo text & delete button
    let tdDiv = document.createElement("div");
    let content = document.createTextNode(todoItem.todoText);

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "todoItem" + todoItem.id);
    deleteButton.innerHTML = "X";

    tdDiv.appendChild(content);
    tdDiv.appendChild(deleteButton);

    // actual list item added to the unorderd list
    let listItem = document.createElement("li");
    listItem.appendChild(tdDiv);
    return listItem;
}

function getTodoText() {
    return inputTextbox.value;
}

function subscribeToEvents() {
    // event handlers
    addTodoButton.addEventListener("click", handleAddTodoButtonOnClick);
    listItems.addEventListener("click", handleListItemClicked);
}

function handleAddTodoButtonOnClick(eventArgs) {

    // increment the counter
    // by virtue of this design, each id will match the correct index in the array used to store items, so deleting will be simple
    itemId++;

    let todoItemToAdd = createTodoItem(itemId, getTodoText());
    todoList.push(todoItemToAdd);

    displayListItems(todoList);
    clearInput(inputTextbox);
}

function handleListItemClicked(eventArgs) {

    let originButton = eventArgs.target;
    let originButtonId = originButton["id"];
    let sliceStart = "todoItem".length;
    let actualId = Number(originButtonId.slice(sliceStart));

    removeItemFromListById(actualId, todoList);
    displayListItems(todoList);
}

function removeItemFromListById(idOfItemToRemove, listToRemoveFrom) {
    if (listToRemoveFrom.length === 0) return;

    for (let i = 0; i < listToRemoveFrom.length; i++) {
        const tdi = listToRemoveFrom[i];

        if (tdi.id === idOfItemToRemove) {
            listToRemoveFrom.splice(i, 1);
        }
    }
}

function clearInput(inputElement) {
    inputElement.value = "";
}

function displayListItems(listToShow) {

    listItems.innerHTML = "";

    for (let i = 0; i < listToShow.length; i++) {
        const tdi = listToShow[i];
        listItems.appendChild(createHtmlElementForTodoItem(tdi));
    }
}