var todoList = {
    todos: [],
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
    }
};

todoList.displayTodos();
todoList.addToDo('added first todo');
todoList.addToDo('added second todo');
todoList.addToDo('added third todo');
todoList.addToDo('added fourth todo');

todoList.toggleCompleted(2);

todoList.displayTodos();