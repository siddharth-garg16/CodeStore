//static methods in JS

class Customer {
    constructor(name){
        this.name = name;
    }

    static welcome(){
        console.log("Thank you for joining our platform!")
    }
}

let user1 = new Customer("Siddharth");
Customer.welcome(); //consoles the respective message
user1.welcome(); //throws an error that user1.welcome() is not a function

//static methods are called using the class itself and not the objects of that class
