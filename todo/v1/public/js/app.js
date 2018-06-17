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
let deleteAll = document.getElementById("delete-all");
let deleteAllCompleted = document.getElementById("delete-all-completed");

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
    } else {
        tdDiv.className += " done";
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
    listItems.addEventListener("click", handleListItemClicked);
    inputTextbox.addEventListener("keyup", handleInputTextBoxKeyUp);
    deleteAll.addEventListener("click", handleDeleteAll);
    deleteAllCompleted.addEventListener("click", handledeleteAllCompleted);
}

function handleInputTextBoxKeyUp(eventArgs) {
    if (eventArgs.key.toLowerCase() === "enter" && inputTextbox.value != "") {
        addTodoItem();
    }
}

function addTodoItem() {
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
    let originButtonId = originButton.id;

    if (originButtonId.startsWith("completeTodoItem")) {
        let sliceStart = "completeTodoItem".length;
        let actualId = Number(originButtonId.slice(sliceStart));
        markTodoItemAsComplete(actualId, todoList);

    } else if (originButtonId.startsWith("todoItem")) {
        let sliceStart = "todoItem".length;
        let actualId = Number(originButtonId.slice(sliceStart));
        deleteItemFromListById(actualId, todoList);
    }

    displayTodoListItems(todoList);
}

function handleDeleteAll() {
    if (todoList.length === 0) {
        return;
    }

    todoList = [];
    listItems.innerHTML = "";
}

function handledeleteAllCompleted() {
    let itemsToKeep = [];
    for (let i = 0; i < todoList.length; i++) {
        let tdi = todoList[i];
        if (!tdi.isCompleted) {
            itemsToKeep.push(tdi);
        }
    }

    todoList = itemsToKeep;
    displayTodoListItems(todoList);
}

function markTodoItemAsComplete(idOfItemToComplete, listToCompleteFrom) {
    if (listToCompleteFrom.length === 0) {
        return
    };

    let ctdi = null;

    for (let i = 0; i < listToCompleteFrom.length; i++) {
        ctdi = listToCompleteFrom[i];

        if (ctdi.id === idOfItemToComplete) {
            ctdi.isCompleted = true;
        }
    }

    return ctdi;
}

function addCompletedTodoItemToCompletedList(completedTodoItem) {}

function deleteItemFromListById(idOfItemToRemove, listToRemoveFrom) {
    if (listToRemoveFrom.length === 0) {
        return
    };

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