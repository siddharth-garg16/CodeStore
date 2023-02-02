var Booking = /** @class */ (function () {
    function Booking(tableID, price, dateOfBooking) {
        this.tableID = tableID;
        this.price = price;
        this.dateOfBooking = dateOfBooking;
    }
    Booking.prototype.getTableID = function () {
        return this.tableID;
    };
    Booking.prototype.getPrice = function () {
        return this.price;
    };
    Booking.prototype.getDate = function () {
        return this.dateOfBooking;
    };
    return Booking;
}());
var availableOptions = [
    { tableID: "TBL-basic-a", price: 500, date: new Date() },
    { tableID: "TBL-basic-b", price: 500, date: new Date() },
    { tableID: "TBL-basic-c", price: 500, date: new Date() },
    { tableID: "TBL-basic-d", price: 500, date: new Date() },
    { tableID: "TBL-basic-e", price: 500, date: new Date() },
    { tableID: "TBL-regular-a", price: 700, date: new Date() },
    { tableID: "TBL-regular-b", price: 700, date: new Date() },
    { tableID: "TBL-regular-c", price: 700, date: new Date() },
    { tableID: "TBL-premium-a", price: 900, date: new Date() },
    { tableID: "TBL-premium-b", price: 900, date: new Date() },
    { tableID: "TBL-premium-c", price: 900, date: new Date() }
];
var form = document.getElementById("option-form");
var display = document.getElementById("available-options");
var alertView = document.getElementById("alert");
if (form instanceof HTMLFormElement && form != null) {
    for (var _i = 0, availableOptions_1 = availableOptions; _i < availableOptions_1.length; _i++) {
        var options = availableOptions_1[_i];
        form.innerHTML += "<div class=\"options\"><input type=\"radio\" name=\"table\" value=\"".concat(options.tableID, "\" required> <h2>ID: <u>").concat(options.tableID, "</u></h2> <h2>Price: $ <u>").concat(options.price, "</u></h2> <h2>Booking Date: <u>").concat(options.date.toLocaleDateString(), "</u></h2></div>");
    }
    form.innerHTML += "<button onclick=\"alertAndRefreshOption(); return false;\">Book</button>";
}
var alertAndRefreshOption = function () {
    var tables = document.getElementsByName("table");
    if (tables !== null) {
        for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
            var table = tables_1[_i];
            if (table instanceof HTMLInputElement) {
                if (table.checked) {
                    var selection = table.value;
                }
            }
        }
    }
    if (display instanceof HTMLDivElement && display !== null) {
        display.style.border = "none";
        display.innerHTML = "";
    }
    for (var _a = 0, availableOptions_2 = availableOptions; _a < availableOptions_2.length; _a++) {
        var obj = availableOptions_2[_a];
        if (obj.tableID === selection) {
            var myBooking = new Booking(obj.tableID, obj.price, obj.date);
        }
    }
    if (alertView instanceof HTMLDivElement && alertView !== null) {
        alertView.innerHTML = "You made a booking for ".concat(myBooking.getTableID(), " on ").concat(myBooking.getDate().toLocaleDateString(), ". Amount Paid: ").concat(myBooking.getPrice());
    }
};
