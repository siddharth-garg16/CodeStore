const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chandigarh"];

let from_choices = {
    Delhi: [],
    Mumbai: [],
    Bangalore: [],
    Pune: [],
    Hyderabad: [],
    Chandigarh: []
}
let to_choices = {
    Delhi: [],
    Mumbai: [],
    Bangalore: [],
    Pune: [],
    Hyderabad: [],
    Chandigarh: []
}

let selector = document.getElementById("preference-selector");
let deletor = document.getElementById("preference-deletor");

let fromLocation = document.getElementById("from");
let toLocation = document.getElementById("to");

for(city of cities){
    fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
}

//code for onchange and eventlistener for the buttons pending----

selector.addEventListener("click", () => {
    let from = fromLocation.value;
    let to = toLocation.value;

    for(val in from_choices){
        
    }
}) //fill the mapping object values (array)

deletor.addEventListener("click", () => {

}) //empty the arrays (value)


fromLocation.addEventListener("change", () => {

}) //handles selective options on "from" selection

toLocation.addEventListener("change", () => {

}) //handles selective options on "from" selection





