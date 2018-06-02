var todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My todos: ', this.todos)
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
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    }
};

todoList.displayTodos();
console.log('adding todos...')
todoList.addToDo('added first todo');
todoList.addToDo('added second todo');
todoList.displayTodos();

console.log('editing second item');
todoList.changeTodo(1, 'edited second todo')


todoList.displayTodos();