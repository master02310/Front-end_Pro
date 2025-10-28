let numOrStr = prompt('input number or string');
console.log(numOrStr)

let res1 = numOrStr === null;
let res2 = numOrStr.trim() === '';
let res3 = isNaN(+numOrStr);

switch (true) {
    case res1:
        console.log('ви скасували');
        break;
    case res2:
        console.log('Empty String');
        break;
    case res3:
        console.log('number is Ba_NaN')
        break;
    default:
        console.log('OK!');
}