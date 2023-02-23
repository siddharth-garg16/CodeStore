//encapsulation - Encapsulation is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object.

class BankUser {
    public customerName : string;
    public contact : number;
    private _savingsBalance: number;

    constructor(customerName: string, contact: number,savingsBalance: number) {
        this.customerName = customerName;
        this.contact = contact;
        this._savingsBalance = savingsBalance;
    }

    userDetails() : string{
        return "Name: " + this.customerName + "\n" + "Contact: " + this.contact;
    }

    savingsBalance(): number{
        return this._savingsBalance;
    }

    deposit(amount: number): void {
        this._savingsBalance += amount;
    }

    withdraw(amount: number): void {
        if(this.savingsBalance() < amount){
            console.log("Insufficient Balance");
            return;
        }
        this._savingsBalance -= amount;
    }
}

let user = new BankUser("Siddharth", 123456789, 5000);
console.log(user.userDetails());
console.log(user.savingsBalance());
user.deposit(2000);
console.log(user.savingsBalance());
user.withdraw(3500);
console.log(user.savingsBalance());
