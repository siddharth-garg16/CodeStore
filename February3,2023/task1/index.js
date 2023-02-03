//generics in typescript
var user = {
    userID: 2345,
    name: "random"
};
var userCart = [];
function addToCart(product) {
    userCart.push(product);
}
function showDetails(val) {
    console.log(val);
}
addToCart({
    productID: 7271462,
    name: "Gym bag",
    price: 1799
});
addToCart({
    productID: 8251931,
    name: "Whey protein",
    price: 3299
});
showDetails(user);
showDetails(userCart);
