//Task 1: Create an Account Constructor Function
// Constructor function for Account
function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}
//Task 2: Implement Methods to Deposit and Withdraw Funds
// Deposit funds
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
};

// Withdraw funds
Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Insufficient balance or invalid amount.");
    }
};
//Task 3: Calculate Compound Interest
// Calculate compound interest
Account.prototype.calculateInterest = function(rate, time) {
    const amount = this.balance * Math.pow((1 + rate / 100), time);
    const interest = amount - this.balance;
    console.log(`Interest after ${time} years: $${interest.toFixed(2)}`);
};
