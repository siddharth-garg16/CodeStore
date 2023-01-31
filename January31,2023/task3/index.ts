//An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.

interface User {
    readonly dbID : number,
    name : string,
    email : string,
    userID : number,
    username : string,
    password ?: string,
    ads : boolean
    getUserID() : string;
}

interface PremiumUser extends User{
    plan : string;                  
}

const user1 : User = {
    dbID : 7632,
    name : "Siddharth",
    email : "s@s.com",
    userID : 223322,
    username : "s1ddhxrth",
    password : "password123",
    ads : true,
    getUserID() {
        return this.userID;
    }
}

const user2 : PremiumUser = {
    dbID : 27646,
    name : "Random",
    email : "r@r.com",
    userID : 777889,
    username : "rxndxm",
    password : "password321",
    ads : false,
    plan : "plan@599",
    getUserID() {
        return this.userID;
    }
}

console.log(user1);
console.log(user2);
console.log(user1.getUserID());
console.log(user2.getUserID());



