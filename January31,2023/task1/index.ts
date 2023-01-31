class Person {
    protected firstName : string;
    protected lastName : string;
    protected age : number;

    constructor(fname : string, lname : string, age : number){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }

    getDetails(){
        console.log(this.firstName, this.lastName, this.age);
        return this.firstName + " " + this.lastName + " - " + this.age;
    }
}

var users : Person[]= [];

var showUser = () => {
    let display : HTMLElement | null;
    display = document.getElementById("display");
    if(display instanceof HTMLDivElement && display != null){
        display.innerHTML = ``;
        display.innerHTML = `<h1>List of registered users.</h1><br>`;
        for(let user of users){
            display.innerHTML += `<h5>${user.getDetails()}</h5>`;
        }
    }
}

var gatherData = () => {
    let fName:HTMLElement | null;
    fName = document.getElementById("fname");
    if(fName instanceof HTMLInputElement && fName != null){
        var firstName = fName.value;
    }

    let lName:HTMLElement | null;
    lName = document.getElementById("lname");
    if(lName instanceof HTMLInputElement && lName != null){
        var lastName = lName.value;
    }

    let ag:HTMLElement | null;
    ag = document.getElementById("age");
    if(ag instanceof HTMLInputElement && ag != null){
        var age = +(ag.value);
    }

    let newUser = new Person(firstName, lastName, age);

    users.push(newUser);

    if(fName instanceof HTMLInputElement && fName != null){
        fName.value = "";
    }
    if(lName instanceof HTMLInputElement && lName != null){
        lName.value = "";
    }
    if(ag instanceof HTMLInputElement && ag != null){
        ag.value = "";
    }

    showUser();
}





