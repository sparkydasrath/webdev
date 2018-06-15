"use strict";


// cache dom elements
let addTodoButton = document.getElementById("add-todo");
let inputTextbox = document.getElementById("input-text");
let listItems = document.getElementById("list-items");
let diag = document.getElementById("diag");

function getTodoText()
{
    return inputTextbox.value;
}

// event handlers
addTodoButton.addEventListener("click", handleAddTodoButtonOnClick);

// basic top level list of todos
let todoList = [];


function handleAddTodoButtonOnClick(eventArgs) {
    console.log("button clicked");

    todoList.push(getTodoText());

    listItems.innerHTML = "";
    listItems.innerHTML = displayListItems(todoList);
}

function displayListItems(listToShow)
{
    return listToShow.join();
}