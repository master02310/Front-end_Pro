const inputName = document.getElementById('input_name');
const inputMassage = document.getElementById('input_massage');
const inputNumber = document.getElementById('input_number');
const inputEmail = document.getElementById('input_email');

const spanName = document.getElementById('error_name');
const spanMassage = document.getElementById('error_mass');
const spanNumber = document.getElementById('error_number');
const spanEmail = document.getElementById('error_email');

const form = document.querySelector('form');

function validateName() {
    const name = inputName.value.trim();
    if (name === '') {
        spanName.innerText = "This field is required";
        return false;
    } else {
        spanName.textContent = '';
        return true;
    }
}

function validateMassage() {
    const massage = inputMassage.value.trim();

    if (massage === '') {
        spanMassage.innerText = "This field is required";
        return false;
    } else if (massage.length < 5) {
        spanMassage.innerText = "This field must have minimum 5 characters long";
        return false;
    } else {
        spanMassage.innerText = '';
        return true;
    }
}

function validateNumber() {
    const number = inputNumber.value.trim();
    const phoneRegex = /^\+380\d{9}$/;

    if (number === '') {
        spanNumber.innerText = "This field is required";
        return false;
    } else if (!phoneRegex.test(number)) {
        spanNumber.innerText = "Phone must be in format +380XXXXXXXXX";
        return false;
    } else {
        spanNumber.innerText = '';
        return true;
    }
}

function validateEmail() {
    const email = inputEmail.value.trim();
    const emailRegex = /.*\..*/;

    if (email === '') {
        spanEmail.innerText = "This field is required";
        return false;
    } else if (!emailRegex.test(email)) {
        spanEmail.innerText = 'Email must contain a dot "."';
        return false;
    } else if (!email.includes('@')) {
        spanEmail.innerText = 'Email must contain a @';
        return false;
    } else {
        spanEmail.innerText = '';
        return true;
    }
}

inputName.addEventListener('input', validateName)
inputMassage.addEventListener('input', validateMassage)
inputNumber.addEventListener('input', validateNumber)
inputEmail.addEventListener('input', validateEmail)

form.addEventListener('submit', function (event) {
    if (!validateName() || !validateMassage() || !validateNumber() || !validateEmail()) {
        event.preventDefault();
        return;
    }

    event.preventDefault();

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        console.log(key + ', ' + value);
    }
})