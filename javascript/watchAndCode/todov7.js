var todoList = 
{
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


todoList.addToDo('first');
todoList.addToDo('second');

var handlers = 
{
    displayTodos: function () {
        todoList.displayTodos();
    },
    toggleAll: function()
    {
        todoList.toggleAll();
    },
    addToDo: function()
    {
        var todoTextInput = document.getElementById('addTodoTextInput');
        todoList.addToDo(todoTextInput.value);
    }
}

