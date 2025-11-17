const array = [1, 3, 4, 6, 2, 5, 7, 4];

function removeElement(array, item) {
    return array.filter(elem => elem !== item);
}

console.log(removeElement(array, 5));