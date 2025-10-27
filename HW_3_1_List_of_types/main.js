console.log(typeof 1);
console.log(typeof 1234567890123456789012345678901234567890n);
console.log(typeof "number");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});

function getType(type){
    return type === null ? null : typeof type;
}

console.log(getType(null));