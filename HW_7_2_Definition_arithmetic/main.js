let array = ["string", "number", "boolean", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, true, null];

let result = array.filter(elem => typeof elem === 'number')

function definitionArithmetic(array) {
    let num = 0

    array.forEach((elem) => num += elem)

    return num / array.length
}

console.log(definitionArithmetic(result));