let number = prompt('Enter a number');

let numArray = number.split('');

console.log(numArray);

let isMatch = false;
let isDouble = false;

let fullDoubleNum = [];

numArray.forEach((element) => {
    if (element !== numArray[0]) {
        isMatch = true;
    }
    if(fullDoubleNum.includes(element)){
        isDouble = true;
    } else {
        fullDoubleNum.push(element)
    }
})

console.log(fullDoubleNum);

console.log('Чи правда, що всі цифри однакові?', isMatch ? 'No' : 'Yes');
console.log('Чи є серед цифр однакові цифри?', isDouble ? 'Yes' : 'No');