enum weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(weekdays);
console.log(weekdays[2]);
console.log(weekdays.Tuesday);

//we can use string enum and computed enums as well
enum faceCards {
    King = "K",
    Queen = "Q",
    Jack = "J"
}
console.log(faceCards);
console.log(faceCards.King);

