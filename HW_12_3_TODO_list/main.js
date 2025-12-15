const taskList = document.querySelector("#list")
const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById("addButton")

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delButton")) {
        event.target.parentElement.remove()
    }
})

addButton.addEventListener("click", function (event) {
    const text = taskInput.value.trim()
    if (text === "") return

    const li = document.createElement("li")
    li.innerHTML = `
    ${text}
    <button class="delButton">Delete</button>`

    taskList.appendChild(li)
    taskInput.value = ""
})