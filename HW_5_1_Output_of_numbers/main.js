let num = 20;

for (let i = 10; i <= num; i++) {
    console.log(num);
    num = num + 0.5;
    if (num === 30.5) {
        break;
    }
    console.log("i = ", i);
}