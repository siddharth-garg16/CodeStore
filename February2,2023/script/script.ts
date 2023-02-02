class Booking {
    tableID : string;
    price : number;
    dateOfBooking : Date;

    constructor(tableID:string, price:number, dateOfBooking:Date){
        this.tableID = tableID;
        this.price = price;
        this.dateOfBooking = dateOfBooking;
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
}

const availableOptions = [
    {tableID : "TBL-basic-a", price : 500, date : new Date()},
    {tableID : "TBL-basic-b", price : 500, date : new Date()},
    {tableID : "TBL-basic-c", price : 500, date : new Date()},
    {tableID : "TBL-basic-d", price : 500, date : new Date()},
    {tableID : "TBL-basic-e", price : 500, date : new Date()},
    {tableID : "TBL-regular-a", price : 700, date : new Date()},
    {tableID : "TBL-regular-b", price : 700, date : new Date()},
    {tableID : "TBL-regular-c", price : 700, date : new Date()},
    {tableID : "TBL-premium-a", price : 900, date : new Date()},
    {tableID : "TBL-premium-b", price : 900, date : new Date()},
    {tableID : "TBL-premium-c", price : 900, date : new Date()}
]

const form = document.getElementById("option-form");
const display = document.getElementById("available-options");
const alertView = document.getElementById("alert");

if(form instanceof HTMLFormElement && form != null){
    for(let options of availableOptions){
        form.innerHTML += `<div class="options"><input type="radio" name="table" value="${options.tableID}" required> <h2>ID: <u>${options.tableID}</u></h2> <h2>Price: $ <u>${options.price}</u></h2> <h2>Booking Date: <u>${options.date.toLocaleDateString()}</u></h2></div>`; 
    }
    form.innerHTML += `<button onclick="alertAndRefreshOption(); return false;">Book</button>`
}

const alertAndRefreshOption = () => {
    let tables = document.getElementsByName("table");
    let selection;
    if(tables !== null){
        for(let table of tables){
            if(table instanceof HTMLInputElement){
                if(table.checked){
                    selection = table.value;
                }
            } 
        }
    }
    
    if(display instanceof HTMLDivElement && display !== null){
        display.style.border = "none";
        display.innerHTML = ``;
    }

    let myBooking : Booking;
    for(let obj of availableOptions){
        if(obj.tableID === selection){
            myBooking = new Booking(obj.tableID, obj.price, obj.date);
        }
    }

    if(alertView instanceof HTMLDivElement && alertView !== null){
        alertView.innerHTML = `You made a booking for ${myBooking.getTableID()} on ${myBooking.getDate().toLocaleDateString()}. Amount Paid: ${myBooking.getPrice()}`;
    }
}
