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
        // using jQuery
        DOM.$todoContainer = $(".todo-container");
        DOM.$input = DOM.$todoContainer.find('#input-text');
        DOM.$todoItems = DOM.$todoContainer.find("#todo-items");

        DOM.$actions = $("#actions");
        DOM.$deleteAll = DOM.$actions.find("#delete-all");
        DOM.$deleteCompleted = DOM.$actions.find("#delete-all-completed");
        DOM.$showHideCompleted = DOM.$actions.find("#show-hide-completed");

        DOM.$counts = $("#command-bar").find("#counts");
    }

    // bind events
    function bindEvents() {
        DOM.$todoItems.on("click", handleListItemClicked);
        DOM.$input.on("keyup", handleInputTextBoxKeyUp);
        DOM.$deleteAll.on("click", handleDeleteAll);
        DOM.$deleteCompleted.on("click", handledeleteAllCompleted);
        DOM.$showHideCompleted.on("click", handleShowHideCompleted);
    }

    // render
    function render() {

        DOM.$todoItems.empty();

        for (let i = 0; i < todoItems.length; i++) {
            const tdi = todoItems[i];
            let $li = createHtmlElementForTodoItem(tdi, tdi.isCompleted);
            DOM.$todoItems.append($li.html());
        }
        let counts = getCounts();
        updateCounts(counts);
    }

    function createHtmlElementForTodoItem(todoItem, isCompleted) {
        // div to hold todo text & delete button

        let $tdDiv = $("<div></div>")
            .addClass("todo-item-container")
            .text(todoItem.todoText);

        // complete button
        if (!isCompleted) {
            let $completeButton = $("<button>complete</button>")
                .attr("id", "completeTodoItem" + todoItem.id);
            $tdDiv.append($completeButton);
        } else {
            let cn = $tdDiv.attr("class");
            let d = cn += " done";
            $tdDiv.attr("class", d);
        }

        // delete button
        let $deleteButton = $("<button>X</button>")
            .attr("id", "todoItem" + todoItem.id);
        $tdDiv.append($deleteButton);

        let $listItem = $("<li></li>");
        $listItem.append($tdDiv);
        return $listItem;
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
        updateHtmlOfElement(DOM.$counts, "");
        let str = "Total: " + counts.total + "\tCompleted: " + counts.completed + "\tNot Complete: " + counts.notComplete;
        updateHtmlOfElement(DOM.$counts, str);
    }

    function handleInputTextBoxKeyUp(eventArgs) {
        if (eventArgs.key.toLowerCase() === "enter" && DOM.$input.val() != "") {
            addTodoItem();
        }
    }

    function getTodoText() {
        return DOM.$input.val();
    }

    function addTodoItem() {
        let todoItemToAdd = createTodoItem(getTodoText());
        todoItems.push(todoItemToAdd);

        render();
        clearInput();
    }

    function clearInput() {
        DOM.$input.val("");
    }

    function createTodoItem(todoText) {
        return generateTodo(todoText);
    }

    function handleDeleteAll() {
        if (todoItems.length === 0) {
            return;
        }
        todoItems = [];
        updateHtmlOfElement(DOM.$todoItems, "");
        render();
    }

    function updateHtmlOfElement(elementToUpdate, htmlStringToUse) {
        elementToUpdate.html(htmlStringToUse);
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