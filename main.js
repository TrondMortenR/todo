let todoList = [];

function getAllTodoes() {
    return todoList;
}

function addTodo(userSubmitted) {
    const newTodo = {
        title: userSubmitted.title,
        isComplete: false,
        createdAt: getCurrentDateTime(),
    };

    todoList.push(newTodo);
    updateUI();
}

function updateUI() {
    const todoItemsList = document.getElementById("todoItems");
    todoItemsList.innerHTML = "";

    todoList.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;
        todoItemsList.appendChild(listItem);
    });
}

addTodo({ title: "feed the cat" });

function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toLocaleString();
}
