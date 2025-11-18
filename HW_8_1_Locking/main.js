let number = 0

function addition(num) {
    number += num
    return number
}

console.log(addition(4))
console.log(addition(6))
console.log(addition(10))
console.log(addition(7))

let sum = (function () {
    let total = 0

    return function (num) {
        total += num
        return total
    };
})();

console.log(sum(4))
console.log(sum(6))
console.log(sum(10))
console.log(sum(7))
