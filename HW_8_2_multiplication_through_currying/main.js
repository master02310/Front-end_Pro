function curryMultiplication(x) {
    return function (y) {
        return x * y;
    };
}

console.log(curryMultiplication(5)(5))