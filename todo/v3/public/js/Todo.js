let Todo = (function () {

    "use strict";

    // DOM placeholder
    let DOM = {}

    let todoItems = [];
    const maxSeed = 500;
    // let todoItems = generateSampleTodos();

    function TodoItem(id, todoText) {
        this.id = id;
        this.todoText = todoText;
        this.isCompleted = false;

        this.toString = function () {
            return this.todoText;
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function generateSampleTodos() {
        let tds = [
            new TodoItem(getRandomInt(maxSeed), "todo 1"),
            new TodoItem(getRandomInt(maxSeed), "todo 2"),
            new TodoItem(getRandomInt(maxSeed), "todo 3"),
            new TodoItem(getRandomInt(maxSeed), "todo 4")
        ];
        return tds;
    }

    function generateTodo(todoText) {
        return new TodoItem(getRandomInt(maxSeed), todoText);
    }

    // cache DOM
    function cacheDom() {
        DOM.inputTextbox = document.getElementById("input-text");
        DOM.listItems = document.getElementById("list-items");
        DOM.deleteAll = document.getElementById("delete-all");
        DOM.deleteAllCompleted = document.getElementById("delete-all-completed");
        DOM.showHideCompleted = document.getElementById("show-hide-completed");
        DOM.countsElement = document.getElementById("counts");
    }


    // bind events
    function bindEvents() {
        DOM.listItems.addEventListener("click", handleListItemClicked);
        DOM.inputTextbox.addEventListener("keyup", handleInputTextBoxKeyUp);
        DOM.deleteAll.addEventListener("click", handleDeleteAll);
        DOM.deleteAllCompleted.addEventListener("click", handledeleteAllCompleted);
        DOM.showHideCompleted.addEventListener("click", handleShowHideCompleted);
    }


    // render
    function render() {
        DOM.listItems.innerHTML = "";

        for (let i = 0; i < todoItems.length; i++) {
            const tdi = todoItems[i];
            DOM.listItems.appendChild(createHtmlElementForTodoItem(tdi, tdi.isCompleted));
        }

        let counts = getCounts();
        updateCounts(counts);
    }

    function createHtmlElementForTodoItem(todoItem, isCompleted) {
        // div to hold todo text & delete button
        let tdDiv = document.createElement("div");
        tdDiv.className = "todo-item-container";
        let content = document.createTextNode(todoItem.todoText);
        tdDiv.appendChild(content);

        // complete button
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

    function getCounts() {
        let completed = 0;
        let notCompleted = 0;

        for (let i = 0; i < todoItems.length; i++) {
            const tdi = todoItems[i];
            if (tdi.isCompleted) {
                completed++;
            } else {
                notCompleted++;
            }
        }
        return {
            completed: completed,
            notComplete: notCompleted,
            total: todoItems.length
        };
    }

    function updateCounts(counts) {
        DOM.countsElement.innerHTML = "";
        DOM.countsElement.innerHTML = "Total: " + counts.total + "\tCompleted: " + counts.completed + "\tNot Complete: " + counts.notComplete;
    }

    function handleInputTextBoxKeyUp(eventArgs) {
        if (eventArgs.key.toLowerCase() === "enter" && DOM.inputTextbox.value != "") {
            addTodoItem();
        }
    }

    function getTodoText() {
        return DOM.inputTextbox.value;
    }

    function addTodoItem() {
        let todoItemToAdd = createTodoItem(getTodoText());
        todoItems.push(todoItemToAdd);

        render();
        clearInput();
    }

    function clearInput() {
        DOM.inputTextbox.value = "";
    }

    function createTodoItem(todoText) {
        return generateTodo(todoText);
    }

    function handleDeleteAll() {
        if (todoItems.length === 0) {
            return;
        }

        todoItems = [];
        DOM.listItems.innerHTML = "";
        render();
    }

    function handledeleteAllCompleted() {
        let itemsToKeep = [];
        for (let i = 0; i < todoItems.length; i++) {
            let tdi = todoItems[i];
            if (!tdi.isCompleted) {
                itemsToKeep.push(tdi);
            }
        }
    }

    function handleListItemClicked(eventArgs) {

        let originButton = eventArgs.target;
        let originButtonId = originButton.id;

        if (originButtonId.startsWith("completeTodoItem")) {
            let sliceStart = "completeTodoItem".length;
            let actualId = Number(originButtonId.slice(sliceStart));
            markTodoItemAsComplete(actualId);

        } else if (originButtonId.startsWith("todoItem")) {
            let sliceStart = "todoItem".length;
            let actualId = Number(originButtonId.slice(sliceStart));
            deleteItemFromListById(actualId);
        }

        render();
    }

    function markTodoItemAsComplete(idToComplete) {

        let tdi = getTodoItemById(idToComplete);
        if (tdi !== null && tdi.item !== null) {
            tdi.item.isCompleted = true;
        }
    }

    function deleteItemFromListById(idToDelete) {

        let tdi = getTodoItemById(idToDelete);
        if (tdi !== null && tdi.item !== null) {
            todoItems.splice(tdi.index, 1);
        }
    }

    function getTodoItemById(id) {
        if (todoItems.length === 0) {
            return
        };

        let tdi = {
            item: null,
            index: 0
        };

        for (let i = 0; i < todoItems.length; i++) {
            let ctdi = todoItems[i];

            if (ctdi.id === id) {
                tdi.item = ctdi;
                tdi.index = i;
                return tdi;
            }
        }
    }

    function handleShowHideCompleted() {
        let childrenOfUl = DOM.listItems.childNodes;
        for (let i = 0; i < childrenOfUl.length; i++) {
            let liElement = childrenOfUl[i];

            // get the first child of the li
            let liContainingDiv = liElement.childNodes[0];
            let divClassName = liContainingDiv.className;

            if (divClassName === "todo-item-container done hide") {
                liContainingDiv.className = "todo-item-container done";
            }
            if (divClassName === "todo-item-container done") {
                liContainingDiv.className = "todo-item-container done hide";
            }
        }
    }

    function handledeleteAllCompleted() {
        let itemsToKeep = [];
        for (let i = 0; i < todoItems.length; i++) {
            let tdi = todoItems[i];
            if (!tdi.isCompleted) {
                itemsToKeep.push(tdi);
            }
        }

        todoItems = itemsToKeep;
        render();
    }

    function init() {
        cacheDom();
        bindEvents();
        render();
    }

    return {
        init: init
    }

}());