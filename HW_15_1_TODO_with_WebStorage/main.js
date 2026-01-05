const taskList = document.querySelector(".js--todos-wrapper")
const taskInput = document.querySelector(".js--form__input")
const addButton = document.querySelector(".form__btn")

const clearButton = document.querySelector(".clear-storage")

let todos = JSON.parse(localStorage.getItem("todos")) || []

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function renderTodos() {
    taskList.innerHTML = ""

    todos.forEach((todo, index) => {
        const li = document.createElement("li")
        li.className = "todo-item"
        if (todo.completed) li.classList.add("todo-item--checked")

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `

        li.querySelector("input").addEventListener("change", () => {
            todos[index].completed = !todos[index].completed
            saveTodos()
            renderTodos()
        })

        li.querySelector(".todo-item__delete").addEventListener("click", () => {
            todos.splice(index, 1)
            saveTodos()
            renderTodos()
        })

        taskList.appendChild(li)
    })
}

addButton.addEventListener("click", function (event) {
    event.preventDefault()

    const text = taskInput.value.trim()
    if (text === "") return

    todos.push({
        text,
        completed: false
    })

    saveTodos()
    renderTodos()
    taskInput.value = ""
})

clearButton.addEventListener("click", () => {
    if (!confirm("Ви впевнені, що хочете очистити всі завдання?")) return

    localStorage.removeItem("todos")
    todos = []
    renderTodos()
})

renderTodos()