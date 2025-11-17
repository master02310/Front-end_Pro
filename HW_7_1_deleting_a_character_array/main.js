let inputText = prompt("Enter the text?");
let inputSymbol = prompt("Enter the Symbol that you want to remove from your text?");

function removeSymbol(text, symbol) {
    return text
        .split('')
        .filter(elem => !symbol.split('').includes(elem))
        .join('')
}

console.log(removeSymbol(inputText, inputSymbol))