var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Tuesday"] = 1] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 2] = "Wednesday";
    weekdays[weekdays["Thursday"] = 3] = "Thursday";
    weekdays[weekdays["Friday"] = 4] = "Friday";
    weekdays[weekdays["Saturday"] = 5] = "Saturday";
    weekdays[weekdays["Sunday"] = 6] = "Sunday";
})(weekdays || (weekdays = {}));
console.log(weekdays);
console.log(weekdays[2]);
console.log(weekdays.Tuesday);
var emp1 = {
    name: "random",
    employeeID: 25678,
    weekAttendance: [true, true, false, true, true],
    weeklyLeaveStatus: function () {
        for (var i = 0; i < 5; i++) {
            if (!this.weekAttendance[i]) {
                return weekdays[i];
            }
        }
    }
};
console.log(emp1);
console.log(emp1.weeklyLeaveStatus());
