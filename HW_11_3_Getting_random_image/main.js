const myButton = document.getElementById('button');
const myImg = document.getElementById('img');

function changeImage(event) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    myImg.src = `./image/${randomNumber}.jpg`;
}

myButton.addEventListener('click', changeImage);