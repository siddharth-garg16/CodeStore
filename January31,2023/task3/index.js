//An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.
var user1 = {
    dbID: 7632,
    name: "Siddharth",
    email: "s@s.com",
    userID: 223322,
    username: "s1ddhxrth",
    password: "password123",
    ads: true,
    getUserID: function () {
        return this.userID;
    }
};
var user2 = {
    dbID: 27646,
    name: "Random",
    email: "r@r.com",
    userID: 777889,
    username: "rxndxm",
    password: "password321",
    ads: false,
    plan: "plan@599",
    getUserID: function () {
        return this.userID;
    }
};
console.log(user1);
console.log(user2);
console.log(user1.getUserID());
console.log(user2.getUserID());
