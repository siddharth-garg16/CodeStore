var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var availableOptions = [
    { tableID: "TBL_basic_a", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_b", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_c", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_d", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_e", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_f", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_basic_g", price: 400, date: new Date(), availability: true },
    { tableID: "TBL_regular_a", price: 600, date: new Date(), availability: true },
    { tableID: "TBL_regular_b", price: 600, date: new Date(), availability: true },
    { tableID: "TBL_regular_c", price: 600, date: new Date(), availability: true },
    { tableID: "TBL_regular_d", price: 600, date: new Date(), availability: true },
    { tableID: "TBL_regular_e", price: 600, date: new Date(), availability: true },
    { tableID: "TBL_premium_a", price: 900, date: new Date(), availability: true },
    { tableID: "TBL_premium_b", price: 900, date: new Date(), availability: true },
    { tableID: "TBL_premium_c", price: 900, date: new Date(), availability: true },
    { tableID: "TBL_premium_d", price: 900, date: new Date(), availability: true },
    { tableID: "TBL_premium_e", price: 900, date: new Date(), availability: true }
];
var Booking = /** @class */ (function () {
    function Booking(name, email, contact, tableID) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.tableID = tableID;
    }
    return Booking;
}());
var bookings = [];
var populateOptions = function (availableOptions) {
    var optionList = document.getElementById("tables");
    if (optionList !== null) {
        optionList.innerHTML = "";
        optionList.innerHTML += "<option value=\"none\" selected disabled hidden>--Pick a table--</option>";
        for (var _i = 0, availableOptions_1 = availableOptions; _i < availableOptions_1.length; _i++) {
            var table = availableOptions_1[_i];
            if (table.availability) {
                optionList.innerHTML += "<option value=\"".concat(table.tableID, "\">").concat(table.tableID, " - ($").concat(table.price, ")</option>");
            }
            else {
                optionList.innerHTML += "<option value=\"".concat(table.tableID, "\" disabled>").concat(table.tableID, " - ($").concat(table.price, ")</option>");
            }
        }
    }
};
var bookTable = function () {
    var fullName = document.getElementById("fullname");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");
    var tables = document.getElementById("tables");
    if (fullName !== null && email !== null && contact !== null && tables !== null) {
        if (fullName instanceof HTMLInputElement && email instanceof HTMLInputElement && contact instanceof HTMLInputElement) {
            var fullNameValue = fullName.value;
            var emailValue = email.value;
            var contactValue = contact.value;
            // console.log(fullNameValue, emailValue, contactValue);
        }
        if (tables instanceof HTMLSelectElement) {
            var selectedTableValue = __spreadArray([], tables.selectedOptions, true).map(function (option) { return option.value; });
            // console.log(selectedTableValue);
        }
    }
    bookings.push(new Booking(fullNameValue, emailValue, contactValue, selectedTableValue[0]));
    for (var _i = 0, availableOptions_2 = availableOptions; _i < availableOptions_2.length; _i++) {
        var table = availableOptions_2[_i];
        if (table.tableID === selectedTableValue[0]) {
            table.availability = false;
        }
    }
    populateOptions(availableOptions);
    var display = document.getElementById("show-bookings");
    if (display !== null && display instanceof HTMLDivElement) {
        display.innerHTML += "<h2>".concat(fullNameValue, ", you have successfully booked table : ").concat(selectedTableValue[0], " for the date : ").concat(new Date().toDateString(), ". <br> The booking details have been sent to your email : ").concat(emailValue, " and contact number : ").concat(contactValue, "</h2><br><br>");
    }
};
populateOptions(availableOptions);
