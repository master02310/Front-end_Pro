let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNum = numArray.map(number => {
    if (number % 2 === 0) {
        return number
    }
})

let evenNum2 = []

numArray.forEach((number) => {
    if (number % 2 === 0) {
        evenNum2.push(number)
    }
})

let evenNum3 = numArray.filter(number => number % 2 === 0)

console.log(numArray)
console.log(evenNum)
console.log(evenNum2)
console.log(evenNum3)