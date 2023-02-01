//encapsulation - Encapsulation is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object.
var BankUser = /** @class */ (function () {
    function BankUser(customerName, contact, savingsBalance) {
        this.customerName = customerName;
        this.contact = contact;
        this._savingsBalance = savingsBalance;
    }
    BankUser.prototype.userDetails = function () {
        return "Name: " + this.customerName + "\n" + "Contact: " + this.contact;
    };
    BankUser.prototype.savingsBalance = function () {
        return this._savingsBalance;
    };
    BankUser.prototype.deposit = function (amount) {
        this._savingsBalance += amount;
    };
    BankUser.prototype.withdraw = function (amount) {
        if (this.savingsBalance() < amount) {
            console.log("Insufficient Balance");
            return;
        }
        this._savingsBalance -= amount;
    };
    return BankUser;
}());
var user = new BankUser("Siddharth", 123456789, 5000);
console.log(user.userDetails());
console.log(user.savingsBalance());
user.deposit(2000);
console.log(user.savingsBalance());
user.withdraw(3500);
console.log(user.savingsBalance());
