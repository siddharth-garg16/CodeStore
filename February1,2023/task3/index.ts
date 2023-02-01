let arr: (String|Number)[] = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];

let modifiedArray = arr.map((item)=> {
    let temp = parseInt(item)
    if(isNaN(temp)){
        return item.toUpperCase();
    }else{
        return temp;
    }
})
console.log(modifiedArray);
