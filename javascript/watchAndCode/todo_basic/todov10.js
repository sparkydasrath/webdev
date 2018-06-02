// rolled v9 features into v8

var todoList = {
    todos: [],
    totalCompleted: 0,
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('list is empty');

        } else {
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true)
                    console.log('(x) ' + this.todos[i].todoText);
                else console.log('( ) ' + this.todos[i].todoText);
            }
        }

    },
    addToDo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1)
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
        var allTrue = 0;
        var allFalse = 0;
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) allTrue++;
            else if (this.todos[i].completed === false) allFalse++;
        }

        if (allTrue === this.todos.length) {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                this.toggleCompleted(i);
            }
        }
    },
};


// todoList.addToDo('first');
// todoList.addToDo('second');

var todoContainer = document.getElementById('todoContainer');

var handlers = {
    // displayTodos: function () {
    //     todoList.displayTodos();
    // },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },
    addToDo: function () {
        var todoTextInput = document.getElementById('addTodoTextInput');
        todoList.addToDo(todoTextInput.value);
        todoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        var positionInput = document.getElementById('changeTodoPositionInput');
        var position = positionInput.valueAsNumber;

        if (position >= todoList.todos.length) return;
        var newTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(position, newTextInput.value);

        positionInput.value = '';
        newTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var itemToComplete = document.getElementById('todoToggleCompleteTextInput');
        var position = itemToComplete.valueAsNumber;
        todoList.toggleCompleted(position);

        itemToComplete.value = '';
        view.displayTodos();
    }
}

var view = {
    displayTodos: function () {

        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todoTextAndCompletion = '';
            if (todoList.todos[i].completed) todoTextAndCompletion = '(x) ' + todoList.todos[i].todoText;
            else todoTextAndCompletion = '( ) ' + todoList.todos[i].todoText;

            todoLi.id = i;
            todoLi.textContent = todoTextAndCompletion;
            todoLi.appendChild(this.createDeleteButton(i));
            todoUl.appendChild(todoLi);
        }

    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todoUl = document.querySelector('ul');
        todoUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            // parent is li, get the id from it
            if (elementClicked.className === 'deleteButton') {
                var id = parseInt(elementClicked.parentNode.id);
                handlers.deleteTodo(id);
            }

        });
    }
}

view.setUpEventListeners();