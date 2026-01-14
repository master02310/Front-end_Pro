class BankAccount {
    constructor(accBalance) {
        this.accBalance = accBalance;
    }

    getBalance() {
        return this.accBalance;
    }

    deposit(balance) {
        this.accBalance = this.accBalance + balance;
        return this.accBalance;
    }

    withdraw(balance) {
        this.accBalance = this.accBalance - balance;
        return this.accBalance;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());