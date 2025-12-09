let myButton1 = document.getElementById('button');
let myButton2 = document.getElementById('button2');
let redirectionURL = null;

function isValidURL(url) {
    const pattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
    return pattern.test(url);
}

function changeURL() {
    console.log(!redirectionURL);
    console.log(redirectionURL);
    if (!redirectionURL) {
        alert("Вы ещё не ввели URL!");
        return;
    }
    window.location.href = redirectionURL;
}

function getURL() {
    let input = prompt("Введите URL")

    if (!input) return;

    if (isValidURL(input)) {
        redirectionURL = input;
        alert("URL сохранён!");
    } else {
        alert("Это не похоже на ссылку. Попробуйте снова.");
    }
}

myButton1.addEventListener('click', getURL);

myButton2.addEventListener('click', changeURL);