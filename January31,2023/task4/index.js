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
//we can use string enum and computed enums as well
var faceCards;
(function (faceCards) {
    faceCards["King"] = "K";
    faceCards["Queen"] = "Q";
    faceCards["Jack"] = "J";
})(faceCards || (faceCards = {}));
console.log(faceCards);
console.log(faceCards.King);
