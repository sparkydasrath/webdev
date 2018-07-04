// function showTodo(todo: { title: string, text: string }) {
//     console.log(todo.title + " " + todo.text);
// }

// let mytodo = { title: "trash", text: "take out trash" };

// showTodo(mytodo);

interface Todo {
    title: string,
    text: string
}

function showTodo(todo: Todo) {
    console.log(todo.title + " " + todo.text);
}

let mytodo = { title: "trash", text: "take out trash using interface" };

showTodo(mytodo);

