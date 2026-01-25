const taskList = document.querySelector(".js--todos-wrapper")
const taskInput = document.querySelector(".js--form__input")
const addButton = document.querySelector(".form__btn")

const modalText = document.getElementById("modalText")
const todoModal = new bootstrap.Modal(document.getElementById("todoModal"))

const clearButton = document.querySelector(".clear-storage")

let todos = JSON.parse(localStorage.getItem("todos")) || []

let currentModalIndex = null

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function renderTodos(newIndex = null) {
    taskList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        if (todo.completed) li.classList.add("todo-item--checked");

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
            <span class="todo-item__description">${todo.text}</span>
            <div class="btn_flex">
                <button class="btn btn-info todo-item__modal">Деталі</button>
                <button class="todo-item__delete">Видалити</button>
            </div>
        `;

        if (index === newIndex) {
            li.classList.add("animate__animated", "animate__fadeIn");
        }

        li.querySelector("input").addEventListener("change", () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });

        li.querySelector(".todo-item__delete").addEventListener("click", () => {
            li.classList.add("animate__animated", "animate__fadeOut");
            setTimeout(() => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            }, 500);
        });

        li.querySelector(".todo-item__modal").addEventListener("click", () => {
            modalText.textContent = todo.text;
            todoModal.show();
            currentModalIndex = index;

            document.querySelectorAll(".mark-done-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    if (currentModalIndex !== null) {
                        todos[currentModalIndex].completed = true;
                        saveTodos();
                        renderTodos();
                        todoModal.hide();
                    }
                });
            });
        });

        taskList.appendChild(li);
    });
}

addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    if (!text) return;

    todos.push({text, completed: false});
    saveTodos();
    renderTodos(todos.length - 1);
    taskInput.value = "";
});


clearButton.addEventListener("click", () => {
    if (!confirm("Ви впевнені, що хочете очистити всі завдання?")) return

    localStorage.removeItem("todos")
    todos = []
    renderTodos()
})

renderTodos()