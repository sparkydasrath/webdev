// rolled v9 features into v8

var todoList = {
    todos: [],
    totalCompleted: 0,
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('list is empty');

        } else {

            this.todos.forEach(function (todo) {
                if (todo.completed === true) console.log('(x) ' + todo.todoText);
                else console.log('( ) ' + todo.todoText);
            });
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
        var completedTodos = 0;
        this.todos.forEach(function (todo) {
            if (todo.completed === true) completedTodos++;
        });

        if (completedTodos === this.todos.length) {
            this.todos.forEach(function (todo) {
                todo.completed = false
            });

        } else {
            this.todos.forEach(function (todo) {
                todo.completed = true;
            });

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
        todoList.todos.forEach(function (todo, id) {
            var todoLi = document.createElement('li');
            var todoTextAndCompletion = '';
            if (todo.completed) todoTextAndCompletion = '(x) ' + todo.todoText;
            else todoTextAndCompletion = '( ) ' + todo.todoText;

            todoLi.id = id;
            todoLi.textContent = todoTextAndCompletion;
            todoLi.appendChild(this.createDeleteButton(id));
            todoUl.appendChild(todoLi);
        }, this);

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