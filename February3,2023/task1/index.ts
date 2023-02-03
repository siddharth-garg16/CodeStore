//generics in typescript

interface Product {
    productID : number,
    name : string,
    price : number
}

interface User {
    userID : number,
    name : string
}

let user : User = {
    userID:2345,
    name : "random"
}
let userCart : Product[] = [];

function addToCart(product : Product) : void{
    userCart.push(product);
}

function showDetails <T>(val : T):void{
    console.log(val);
}

addToCart({
    productID : 7271462,
    name : "Gym bag",
    price : 1799
})

addToCart({
    productID : 8251931,
    name : "Whey protein",
    price : 3299
})

showDetails(user);
showDetails(userCart);




