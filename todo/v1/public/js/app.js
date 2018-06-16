"use strict";

/* BAD: create a montonically increasing global variable to store the id 
    each time the app is run, the list will start at 0 since no storage is involved in this version
*/

let itemId = -1;

// basic top level list of todos
let todoList = [];
let completedTodoList = [];

// =================================================================

// cache dom elements
let addTodoButton = document.getElementById("add-todo");
let deleteTodoButton = document.getElementById("delete-todo");
let inputTextbox = document.getElementById("input-text");
let listItems = document.getElementById("list-items");
let completedListItems = document.getElementById("completed-list-items");
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

function createHtmlElementForTodoItem(todoItem, isCompleted) {
    // div to hold todo text & delete button
    let tdDiv = document.createElement("div");
    tdDiv.className = "todo-item-container";
    let content = document.createTextNode(todoItem.todoText);
    tdDiv.appendChild(content);

    // complete button
    // only add this if isCompleted is false

    if (!isCompleted) {
        let completeButton = document.createElement("button");
        completeButton.setAttribute("id", "completeTodoItem" + todoItem.id);
        completeButton.innerHTML = "complete";
        tdDiv.appendChild(completeButton);
    }

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "todoItem" + todoItem.id);
    deleteButton.innerHTML = "X";
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
    completedListItems.addEventListener("click", handleCompletedListItemClicked);
}

function handleAddTodoButtonOnClick() {

    // increment the counter
    // by virtue of this design, each id will match the correct index in the array used to store items, so deleting will be simple
    itemId++;

    let todoItemToAdd = createTodoItem(itemId, getTodoText());
    todoList.push(todoItemToAdd);

    displayTodoListItems(todoList);
    clearInput(inputTextbox);
}

function handleListItemClicked(eventArgs) {

    let originButton = eventArgs.target;
    let originButtonId = originButton["id"];

    // 3 cases to handle:
    //  1. just the container was clicked, do nothing
    //  2. complete button clicked, mark as complete, remove from main todo list, move to completed list
    //  3. delete button clicked, immediately remove item from list

    if (originButtonId === "") return;

    else if (originButtonId.startsWith("complete")) {
        let sliceStart = "completeTodoItem".length;
        let actualId = Number(originButtonId.slice(sliceStart));
        let completedItem = markTodoItemAsComplete(actualId, todoList, completedTodoList);
        removeItemFromListById(actualId, todoList);
        addCompletedTodoItemToCompletedList(completedItem);
    } else {

        // delete button is hit, very messy here, don't like this one bit 
        let sliceStart = "todoItem".length;
        let actualId = Number(originButtonId.slice(sliceStart));
        removeItemFromListById(actualId, todoList);
    }

    displayTodoListItems(todoList);
    displayCompletedTodoListItems(completedTodoList);
}

function handleCompletedListItemClicked(eventArgs) {
    let originButton = eventArgs.target;
    let originButtonId = originButton["id"];

    let sliceStart = "completeTodoItem".length;
    let actualId = Number(originButtonId.slice(sliceStart));
    removeItemFromListById(actualId, completedTodoList);
}

function markTodoItemAsComplete(idOfItemToComplete, listToCompleteFrom, listToMoveCompletedTo) {
    if (listToCompleteFrom.length === 0) return;

    let ctdi = null;

    for (let i = 0; i < listToCompleteFrom.length; i++) {
        ctdi = listToCompleteFrom[i];

        if (ctdi.id === idOfItemToComplete) {
            ctdi.isCompleted = true;
        }
    }

    return ctdi;
}

function addCompletedTodoItemToCompletedList(completedTodoItem) {
    completedTodoList.push(completedTodoItem);
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

function displayTodoListItems(todoListToShow) {
    listItems.innerHTML = "";

    for (let i = 0; i < todoListToShow.length; i++) {
        const tdi = todoListToShow[i];
        listItems.appendChild(createHtmlElementForTodoItem(tdi, tdi.isCompleted));
    }
}

function displayCompletedTodoListItems(completedTodoListToShow) {
    completedListItems.innerHTML = "";

    for (let i = 0; i < completedTodoListToShow.length; i++) {
        const tdi = completedTodoListToShow[i];
        completedListItems.appendChild(createHtmlElementForTodoItem(tdi, tdi.isCompleted));
    }
}