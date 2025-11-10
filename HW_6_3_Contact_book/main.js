let arrName = prompt("Enter the name for new user fo Contact book")
let arrPhone = prompt("Enter the phone number for this new user")
let arrEmail = prompt("Enter the email address for this new user")

let contactBook = [
    {
        name: "John",
        phone: "0123456789",
        email: "John@gmail.com"
    },
    {
        name: "Johan",
        phone: "1234567890",
        email: "Johan@gmail.com"
    }
]

let newUser = {
    name: arrName,
    phone: arrPhone,
    email: arrEmail,
}

contactBook.splice(0, 0, newUser)

contactBook.forEach((element) => {
    console.log(`Name: ${element.name}, Phone: ${element.phone}, Email: ${element.email}`);
})