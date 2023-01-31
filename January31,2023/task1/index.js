var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        console.log(this.firstName, this.lastName, this.age);
        return this.firstName + " " + this.lastName + " - " + this.age;
    };
    return Person;
}());
var users = [];
var showUser = function () {
    var display;
    display = document.getElementById("display");
    if (display instanceof HTMLDivElement && display != null) {
        display.innerHTML = "";
        display.innerHTML = "<h1>List of registered users.</h1><br>";
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            display.innerHTML += "<h5>".concat(user.getDetails(), "</h5>");
        }
    }
};
var gatherData = function () {
    var fName;
    fName = document.getElementById("fname");
    if (fName instanceof HTMLInputElement && fName != null) {
        var firstName = fName.value;
    }
    var lName;
    lName = document.getElementById("lname");
    if (lName instanceof HTMLInputElement && lName != null) {
        var lastName = lName.value;
    }
    var ag;
    ag = document.getElementById("age");
    if (ag instanceof HTMLInputElement && ag != null) {
        var age = +(ag.value);
    }
    var newUser = new Person(firstName, lastName, age);
    users.push(newUser);
    if (fName instanceof HTMLInputElement && fName != null) {
        fName.value = "";
    }
    if (lName instanceof HTMLInputElement && lName != null) {
        lName.value = "";
    }
    if (ag instanceof HTMLInputElement && ag != null) {
        ag.value = "";
    }
    showUser();
};
