let num = 10;
let currency = 26;

for (let i = 1; i <= num; i++) {
    console.log(`${num}$ = ${currency * num}₴`);
    if (num === 100) {
        break;
    }
    num = num + 10;
}