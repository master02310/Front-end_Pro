const parent = document.getElementById("parent");

parent.addEventListener("click", function (event) {
    if (event.target.classList.contains("button")) {
        alert("Нажата кнопка: Кнопка 1")
    } else if (event.target.classList.contains("button2")) {
        alert("Нажата кнопка: Кнопка 2")
    } else if (event.target.classList.contains("button3")) {
        alert("Нажата кнопка: Кнопка 3")
    }
})