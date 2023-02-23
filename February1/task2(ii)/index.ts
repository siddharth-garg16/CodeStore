//polymorphism - Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.

class Timeline{
    pages : number;
    postsPerPage : number;
    ads : boolean;

    constructor(
        pages:number,
        postsPerPage:number,
        ads:boolean
    ){
        this.pages = pages;
        this.postsPerPage = postsPerPage;
        this.ads = ads;
    }
}

class User {
    userID : number;
    name : string;
    username : string;
    constructor(
        userID : number,
        name : string,
        username : string
    ){
        this.userID = userID;
        this.name = name;
        this.username = username;
    }

    renderTimeline() : Timeline{
        return new Timeline(5, 12, true);
    }
}

class PremiumUser extends User {
    plan : string;

    constructor(
        userID:number,
        name:string,
        username:string,
        plan:string
    ){
        super(userID, name, username);
        this.plan = plan;
    }

    renderTimeline(): Timeline {
        return new Timeline(4, 12, false);
    }
}

let freeUser = new User(24356, "random-free-user", "freeUser123");
let premiumUser = new PremiumUser(74365, "random-premium-user", "premiumUser789", "@1299");

console.log(freeUser.renderTimeline());
console.log(premiumUser.renderTimeline());
