const availableOptions = [
    {tableID : "TBL_basic_a", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_b", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_c", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_d", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_e", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_f", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_basic_g", price : 400, date : new Date(), availability: true},
    {tableID : "TBL_regular_a", price : 600, date : new Date(), availability: true},
    {tableID : "TBL_regular_b", price : 600, date : new Date(), availability: true},
    {tableID : "TBL_regular_c", price : 600, date : new Date(), availability: true},
    {tableID : "TBL_regular_d", price : 600, date : new Date(), availability: true},
    {tableID : "TBL_regular_e", price : 600, date : new Date(), availability: true},
    {tableID : "TBL_premium_a", price : 900, date : new Date(), availability: true},
    {tableID : "TBL_premium_b", price : 900, date : new Date(), availability: true},
    {tableID : "TBL_premium_c", price : 900, date : new Date(), availability: true},
    {tableID : "TBL_premium_d", price : 900, date : new Date(), availability: true},
    {tableID : "TBL_premium_e", price : 900, date : new Date(), availability: true}
]

class Booking{
    name : string;
    email : string;
    contact : string;
    tableID : string;

    constructor(name:string, email:string, contact:string, tableID:string){
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.tableID = tableID;
    }
}

const bookings : Booking[] = [];

const populateOptions = (availableOptions) => {
    const optionList = document.getElementById("tables");

    if(optionList !== null){
        optionList.innerHTML = ``;
        optionList.innerHTML += `<option value="none" selected disabled hidden>--Pick a table--</option>`;
        for(let table of availableOptions){
            if(table.availability){
                optionList.innerHTML += `<option value="${table.tableID}">${table.tableID} - ($${table.price})</option>`
            }else{
                optionList.innerHTML += `<option value="${table.tableID}" disabled>${table.tableID} - ($${table.price})</option>`
            }
        }
    }
}

const bookTable = () => {
    let fullName = document.getElementById("fullname");
    let email = document.getElementById("email");
    let contact = document.getElementById("contact");
    let tables = document.getElementById("tables");

    if(fullName!==null && email!==null && contact!==null && tables!==null){
        if(fullName instanceof HTMLInputElement && email instanceof HTMLInputElement && contact instanceof HTMLInputElement){
            var fullNameValue = fullName.value;
            var emailValue = email.value;
            var contactValue = contact.value;
            // console.log(fullNameValue, emailValue, contactValue);
            if(tables instanceof HTMLSelectElement){
                var selectedTableValue = [...tables.selectedOptions].map(option=>option.value);
                // console.log(selectedTableValue);
                bookings.push(new Booking(fullNameValue, emailValue, contactValue, selectedTableValue[0]));
            }         
        }   
    }

    for(let table of availableOptions){
        if(table.tableID === selectedTableValue[0]){
            table.availability = false;
        }
    }
    populateOptions(availableOptions);

    let display = document.getElementById("show-bookings");
    if(display!==null && display instanceof HTMLDivElement){
        display.innerHTML += `<h2>${fullNameValue}, you have successfully booked table : ${selectedTableValue[0]} for the date : ${new Date().toDateString()}. <br> The booking details have been sent to your email : ${emailValue} and contact number : ${contactValue}</h2><br><br>`
    }
}

populateOptions(availableOptions);
