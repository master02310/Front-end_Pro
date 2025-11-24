function requestNumberOver100() {
    for (let i = 1; i <= 10; i++) {
        let promptNumber = prompt("Enter a number greater than 100.");
        if (promptNumber < 100) {
            alert("Unfortunately, you entered a number less than 100.");
        } else if (promptNumber > 100 || typeof promptNumber === "string") {
            alert(promptNumber);
            break;
        }
    }
}

requestNumberOver100();