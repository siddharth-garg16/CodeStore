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

const addSelections = () => {
    let from = fromLocation.value;
    let to = toLocation.value;

    if(from=="none" || to=="none"){
        alert("Please select both destinations.");
    }else{
        for(val in from_choices){
            if(val==from){
                from_choices[val].push(to);
            }
        }
        for(val in to_choices){
            if(val==to){
                to_choices[val].push(from);
            }
        }
        document.getElementById("display-choices").innerHTML += `<h1>${from} to ${to}</h1>`;  
    }

    fromLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    toLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    
    for(city of cities){
        fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
        toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    }
}

const clearSelections = () => {
    for(val in from_choices){
        from_choices[val].length = 0;
    }
    for(val in to_choices){
        to_choices[val].length = 0;
    }
    document.getElementById("display-choices").innerHTML = ``;

    fromLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    toLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;

    for(city of cities){
        fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
        toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    }
}


fromLocation.addEventListener("change", () => {
    let val = fromLocation.value;
    let temp = [];

    for(key in to_choices){
        if(key!=val){
            var found = false; 
            for(city of to_choices[key]){
                if(city==val){
                    found = true;
                    break
                }
            }
            if(!found){
                temp.push(key);
            }
        }
    }

    toLocation.innerHTML = ``;
  
    if(temp.length==0){
        toLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    }else{
        for(ct of temp){
        toLocation.innerHTML += `<option value=${ct}> ${ct} </option>`;
    }
    }
})

toLocation.addEventListener("change", () => {
    let val = toLocation.value;
    let temp = [];

    for(key in from_choices){
        if(key!=val){
            var found = false; 
            for(city of from_choices[key]){
                if(city==val){
                    found = true;
                    break
                }
            }
            if(!found){
                temp.push(key);
            }
        }
    }
  
    fromLocation.innerHTML = ``;
    if(temp.length==0){
        fromLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    }else{
        for(ct of temp){
        fromLocation.innerHTML += `<option value=${ct}> ${ct} </option>`;
    }
    }
})





