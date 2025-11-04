let promptNum = prompt("Enter a number");

for (let i = 1; i <= promptNum;) {
    if (i * i >= promptNum) {
        break;
    } else if (i === 100) {
        break;
    }
    console.log(i);
    i++
}