"use strict";

(function () {

    const maxSeed = 500;

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

    let todos = {
        todoItems: [],
        // todoItems: generateSampleTodos(),
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();

        },
        cacheDom: function () {
            this.deleteTodoButton = document.getElementById("delete-todo");
            this.inputTextbox = document.getElementById("input-text");
            this.listItems = document.getElementById("list-items");
            this.deleteAll = document.getElementById("delete-all");
            this.deleteAllCompleted = document.getElementById("delete-all-completed");
            this.showHideCompleted = document.getElementById("show-hide-completed");
            this.countsElement = document.getElementById("counts");

        },
        bindEvents: function () {
            this.listItems.addEventListener("click", this.handleListItemClicked.bind(this));
            this.inputTextbox.addEventListener("keyup", this.handleInputTextBoxKeyUp.bind(this));
            this.deleteAll.addEventListener("click", this.handleDeleteAll.bind(this));
            this.deleteAllCompleted.addEventListener("click", this.handledeleteAllCompleted.bind(this));
            this.showHideCompleted.addEventListener("click", this.handleShowHideCompleted.bind(this))
        },
        render: function () {
            this.listItems.innerHTML = "";

            for (let i = 0; i < this.todoItems.length; i++) {
                const tdi = this.todoItems[i];
                this.listItems.appendChild(this.createHtmlElementForTodoItem(tdi, tdi.isCompleted));
            }

            let counts = this.getCounts();
            this.updateCounts(counts);

        },
        getCounts: function () {
            let completed = 0;
            let notCompleted = 0;

            for (let i = 0; i < this.todoItems.length; i++) {
                const tdi = this.todoItems[i];
                if (tdi.isCompleted) {
                    completed++;
                } else {
                    notCompleted++;
                }
            }
            return {
                completed: completed,
                notComplete: notCompleted,
                total: this.todoItems.length
            };
        },
        updateCounts: function (counts) {
            this.countsElement.innerHTML = "";
            this.countsElement.innerHTML = "Total: " + counts.total + "\tCompleted: " + counts.completed + "\tNot Complete: " + counts.notComplete;
        },
        handleInputTextBoxKeyUp: function (eventArgs) {
            if (eventArgs.key.toLowerCase() === "enter" && this.inputTextbox.value != "") {
                this.addTodoItem();
            }
        },
        handleDeleteAll: function () {
            if (this.todoItems.length === 0) {
                return;
            }

            this.todoItems = [];
            this.listItems.innerHTML = "";
        },
        handledeleteAllCompleted: function () {
            let itemsToKeep = [];
            for (let i = 0; i < this.todoItems.length; i++) {
                let tdi = this.todoItems[i];
                if (!tdi.isCompleted) {
                    itemsToKeep.push(tdi);
                }
            }

            this.todoItems = itemsToKeep;
            this.render();
        },
        handleShowHideCompleted: function () {
            let childrenOfUl = this.listItems.childNodes;
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
        },
        addTodoItem: function () {
            let todoItemToAdd = this.createTodoItem(this.getTodoText());
            this.todoItems.push(todoItemToAdd);

            this.render();
            this.clearInput();
        },
        clearInput: function () {
            this.inputTextbox.value = "";
        },
        createTodoItem: function (todoText) {
            return generateTodo(todoText);
        },
        getTodoText: function () {
            return this.inputTextbox.value;
        },
        handleListItemClicked: function (eventArgs) {

            let originButton = eventArgs.target;
            let originButtonId = originButton.id;

            if (originButtonId.startsWith("completeTodoItem")) {
                let sliceStart = "completeTodoItem".length;
                let actualId = Number(originButtonId.slice(sliceStart));
                this.markTodoItemAsComplete(actualId);

            } else if (originButtonId.startsWith("todoItem")) {
                let sliceStart = "todoItem".length;
                let actualId = Number(originButtonId.slice(sliceStart));
                this.deleteItemFromListById(actualId);
            }

            this.render();
        },
        markTodoItemAsComplete: function (idToComplete) {

            let tdi = this.getTodoItemById(idToComplete);
            if (tdi !== null && tdi.item !== null) {
                tdi.item.isCompleted = true;
            }
        },
        deleteItemFromListById: function (idToDelete) {

            let tdi = this.getTodoItemById(idToDelete);
            if (tdi !== null && tdi.item !== null) {
                this.todoItems.splice(tdi.index, 1);
            }
        },
        getTodoItemById: function (id) {
            if (this.todoItems.length === 0) {
                return
            };

            let tdi = {
                item: null,
                index: 0
            };

            for (let i = 0; i < this.todoItems.length; i++) {
                let ctdi = this.todoItems[i];

                if (ctdi.id === id) {
                    tdi.item = ctdi;
                    tdi.index = i;
                    return tdi;
                }
            }
        },
        createHtmlElementForTodoItem: function (todoItem, isCompleted) {
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
    }

    todos.init();
})();