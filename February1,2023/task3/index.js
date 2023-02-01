var arr = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];
var modifiedArray = arr.map(function (item) {
    var temp = parseInt(item);
    if (isNaN(temp)) {
        return item.toUpperCase();
    }
    else {
        return temp;
    }
});
console.log(modifiedArray);
