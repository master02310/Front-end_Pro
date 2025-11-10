let userCard = {
    name: "John",
    age: 23,
    location: "London",
}

userCard.output = function () {
    console.log(`Your name is ${this.name}, you are ${this.age} years old and you live in ${this.location}!`)
}

userCard.output()