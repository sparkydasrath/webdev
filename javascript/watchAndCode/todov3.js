var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos : function() {console.log('My todos: ', this.todos)},
    addToDo: function(todo) {this.todos.push(todo)},
    changeTodo: function(position, newValue) {this.todos[position] = newValue},
    deleteTodo: function(position) {this.todos.splice(position, 1)}
};


todoList.displayTodos();
todoList.addToDo('added todo');
todoList.displayTodos();
todoList.changeTodo(3, 'change added todo');
todoList.displayTodos();
console.log('deleting last added item....');
todoList.deleteTodo(3);
todoList.displayTodos();