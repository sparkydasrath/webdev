var todos = ['item1', 'item2', 'item3'];

function displayTodos(todos)
{
    console.log(todos)

}

function addTodo(itemToAdd)
{
    todosToAddTo.push(itemToAdd);
}

function changeTodo(position, newValue)
{
    todos[position] = newValue;
}

function deleteTodo(position)
{
    todos.splice(position);
}
