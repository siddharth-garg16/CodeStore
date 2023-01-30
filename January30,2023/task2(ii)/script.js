//in event bubbling, an event starts at the the most specific element and then flows upward towards the least specific element.
//The stopPropagation() method allows you to prevent propagation of the current event.

let div = document.getElementById("mydiv");
let btn = document.getElementById("mybtn");
let body = document.getElementById("mybody")

body.addEventListener("click", function(){
    console.log("Body event");
})

div.addEventListener("click", function(){
    console.log("Div event");
})

btn.addEventListener("click", function(e){
    console.log("Button event");
    e.stopPropagation();
})

//if we select button, by default (button then div then body) ie.bottom to up--called bubbling--
//stopPropagation allowed us to prevent bubbling(propagation)
