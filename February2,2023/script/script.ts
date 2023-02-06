class Booking {
    tableID : string;
    price : number;
    dateOfBooking : Date;
    user : string;
    email : string;

    constructor(tableID:string, price:number, dateOfBooking:Date, user:string, email:string){
        this.tableID = tableID;
        this.price = price;
        this.dateOfBooking = dateOfBooking;
        this.user = user;
        this.email = email;
    }

    getTableID(){
        return this.tableID;
    }

    getPrice(){
        return this.price;
    }

    getDate(){
        return this.dateOfBooking;
    }
    getUser(){
        return this.user;
    }
    getEmail(){
        return this.email;
    }
}

const availableOptions = [
    {tableID : "TBL-basic-a", price : 500, date : new Date(), availability: true},
    {tableID : "TBL-basic-b", price : 500, date : new Date(), availability: true},
    {tableID : "TBL-basic-c", price : 500, date : new Date(), availability: true},
    {tableID : "TBL-basic-d", price : 500, date : new Date(), availability: true},
    {tableID : "TBL-basic-e", price : 500, date : new Date(), availability: true},
    {tableID : "TBL-regular-a", price : 700, date : new Date(), availability: true},
    {tableID : "TBL-regular-b", price : 700, date : new Date(), availability: true},
    {tableID : "TBL-regular-c", price : 700, date : new Date(), availability: true},
    {tableID : "TBL-premium-a", price : 900, date : new Date(), availability: true},
    {tableID : "TBL-premium-b", price : 900, date : new Date(), availability: true},
    {tableID : "TBL-premium-c", price : 900, date : new Date(), availability: true}
]

const madeBookings = [];

const form = document.getElementById("option-form");
const display = document.getElementById("available-options");
const alertView = document.getElementById("alert");

const showOptions = () => {
    if(form instanceof HTMLFormElement && form != null){
        for(let options of availableOptions){
            if(options.availability){
                form.innerHTML += `<div class="options"><input type="radio" name="table" value="${options.tableID}" required> <h2>ID: <u>${options.tableID}</u></h2> <h2>Price: $ <u>${options.price}</u></h2> <h2>Booking Date: <u>${options.date.toLocaleDateString()}</u></h2></div>`;
            } 
        }
        form.innerHTML += `<button onclick="alertAndRefreshOption(); return false;">Book</button>`
    }
}

showOptions();

const alertAndRefreshOption = () => {
    let tables = document.getElementsByName("table");
    let selection;
    if(tables !== null){
        for(let table of tables){
            if(table instanceof HTMLInputElement){
                if(table.checked){
                    selection = table.value;
                    break;
                }
            } 
        }
    }

    if(document.getElementById("username") !== null && document.getElementById("email") !== null && document.getElementById("username") instanceof HTMLInputElement && document.getElementById("email") instanceof HTMLInputElement){
        var user = document.getElementById("username").value;
        var email = document.getElementById("email").value;
    }

    let myBooking : Booking;
    for(let obj of availableOptions){
        if(obj.tableID === selection){
            obj.availability = false;
            myBooking = new Booking(obj.tableID, obj.price, obj.date, user, email);
            madeBookings.push(myBooking);
        }
    }

    if(alertView instanceof HTMLDivElement && alertView !== null){
        alertView.innerHTML = `${myBooking.getUser()}, You made a booking for ${myBooking.getTableID()} on ${myBooking.getDate().toLocaleDateString()}. Amount Paid: ${myBooking.getPrice()}. <br> Booking details have been sent on your email: ${myBooking.getEmail()}`;
    }

    showOptions();
}
