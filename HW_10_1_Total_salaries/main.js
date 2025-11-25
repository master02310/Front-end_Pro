let Company1 = {
    sales: [
        {name: "Jone", salary: 1000},
        {name: "Alice", salary: 600}],
    development: {
        web: [
            {name: "Peter", salary: 2000},
            {name: "Alex", salary: 1800},
        ],
        internals: [{name: "Jack", salary: 1300}],
    }
}

let Company2 = {
    sales: [
        {name: "Jone", salary: 1000},
        {name: "Alice", salary: 600}
    ],
    development: {
        web: {
            back: [{name: "Peter", salary: 2000}],
            front: [{name: "Alex", salary: 1800}],
            PM: [{name: "Quincy", salary: 600}],
        },
        internals: [{name: "Josh", salary: 500}],
    },
    marketing: [{name: "Jack", salary: 1300}],
}

function getTotalSalaries(obj) {
    let total = 0;
    if (Array.isArray(obj)) {
        return obj.reduce((total, employee) => total + employee.salary, 0);

    }
    for (let key in obj) {
        total += getTotalSalaries(obj[key]);

    }
    return total;
}

console.log('Company1: ', getTotalSalaries(Company1));
console.log('Company2: ', getTotalSalaries(Company2));