const myButton = document.getElementById('button');
const myText = document.getElementById('text');

function changeColor(event) {
    myText.style.color = (myText.style.color === "red" ? "black" : "red");
}

myButton.addEventListener('click', changeColor);