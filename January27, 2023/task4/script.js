const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chandigarh"];
let prefered_choices_from = {
    Delhi: [],
    Mumbai: [],
    Bangalore: [],
    Pune: [],
    Hyderabad: [],
    Chandigarh: []
}
let prefered_choices_to = {
    Delhi: [],
    Mumbai: [],
    Bangalore: [],
    Pune: [],
    Hyderabad: [],
    Chandigarh: []
}
let from = document.getElementById("from");
let to = document.getElementById("to");

for(city of cities){
    from.innerHTML += `<option value=${city}> ${city} </option>`;
    to.innerHTML += `<option value=${city}> ${city} </option>`;
}

//code for onchange and eventlistener for the buttons pending----



